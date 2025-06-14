import { Component, OnInit } from '@angular/core';

import { Register } from '../models/register';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formData: Register = {
    username: '',
    password: '',
    email: '',
  };

  notifica = {
    messaggio: '',
    statoNotifica: false,
    error: false,
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    if (form.valid) {
      const { username, password, email } = this.formData;
      // console.log(username, password, email);
      this.authService.registerService(username, password, email);
      this.notifica.messaggio = 'Registrazione avvenuta con successo!!';
      this.notifica.statoNotifica = true;
      this.notifica.error = false;
      form.reset(); // resetta anche lo stato dei controlli
    } else {
      this.notifica.messaggio = 'Il form deve essere compilato';
      this.notifica.statoNotifica = true;
      this.notifica.error = true;
      console.warn('Il form contiene errori');
    }
  }
}
