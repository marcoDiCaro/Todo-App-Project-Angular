import { Injectable } from '@angular/core';

import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authentication: boolean = false;

  private user: Register = {
    username: '',
    password: '',
    email: '',
  };

  constructor() {}

  loadDatiLocalStorage() {
    const datiString = localStorage.getItem('auth');
    if (datiString) {
      const dati: Register = JSON.parse(datiString);
      if (dati) {
        const { username, password, email } = dati;
        this.user.username = username;
        this.user.password = password;
        this.user.email = email;
      }
    }
  }

  isAuthenticated() {
    return this.authentication;
  }

  registerService(username: string, password: string, email: string) {
    this.user.username = username;
    this.user.password = password;
    this.user.email = email;

    localStorage.setItem('auth', JSON.stringify(this.user)); // Salvo dati nel localStorage (usando JSON)

    console.log('Registrato:', this.user.username, this.user.password, this.user.email);
  }

  loginService(username: string, password: string): boolean {
    this.loadDatiLocalStorage();

    if (this.user.username === username && this.user.password === password) {
      console.log(this.user.username, this.user.password);

      this.authentication = true;

      return true;
    }
    return false;
  }
}
