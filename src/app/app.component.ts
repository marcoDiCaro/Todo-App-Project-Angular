import { Component } from '@angular/core';
import { Todo } from './models/todo';

import { Notifica } from './models/notifica';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faXmark = faXmark; //FontAwesome Icon

  listaTodos: Todo[] = [];

  notifica: boolean = false;
  notificaText: string = "";

  mostraTodos(todos: Todo[]) {
    this.listaTodos = todos;
  }

  aggiungiNotifica(notificaObj: Notifica) {
    const {notifica, text} = notificaObj;
    this.notifica = notifica;
    this.notificaText = text;
  }

  rimuoviNotifica() {
    this.notifica = false;
    this.notificaText = "";
  }
}