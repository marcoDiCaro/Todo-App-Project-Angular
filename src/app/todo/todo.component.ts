import { Component } from '@angular/core';
import { Todo } from '../models/todo';

import { Notifica } from '../models/notifica';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  title: string = 'todo-app-project';

  faXmark = faXmark; //FontAwesome Icon

  listaTodos: Todo[] = [];

  notifica = {
    messaggio: '',
    statoNotifica: false,
  };

  mostraTodos(todos: Todo[]) {
    this.listaTodos = todos;
  }

  aggiungiNotifica(notificaObj: Notifica) {
    const { notifica, text } = notificaObj;
    this.notifica.statoNotifica = notifica;
    this.notifica.messaggio = text;
  }

}
