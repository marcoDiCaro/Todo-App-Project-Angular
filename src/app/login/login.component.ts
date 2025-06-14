import { Component, OnInit } from '@angular/core';

import { Login } from '../models/login';

import { AuthService } from '../auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formData: Login = {
    username: '',
    password: '',
  };

  notifica = {
    messaggio: '',
    statoNotifica: false,
    error: false,
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    if (form.valid) {
      const { username, password } = this.formData;
      // console.log("username: " + username + ", password: " + password)
      if (this.authService.loginService(username, password)) {
        this.router.navigate(['/dashboard']); // reindirizzamento dopo avvenuta login
      } else {
        this.notifica.messaggio = 'Username o Password non validi';
        this.notifica.statoNotifica = true;
        this.notifica.error = true;
      }
    } else {
      this.notifica.messaggio = 'Il form deve essere compilato';
      this.notifica.statoNotifica = true;
      this.notifica.error = true;
      console.warn('Il form contiene errori');
    }
  }
}
