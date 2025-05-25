import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoAppService } from '../services/todo-app.service';

import { Todo } from '../models/todo';

import { Notifica } from '../models/notifica';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.css'],
})
export class TodoBoxComponent implements OnInit {
  @Output() notificaEvent = new EventEmitter<Notifica>(); // Creiamo un evento Output

  faTrash = faTrash; //FontAwesome Icon

  @Input() todosList: Todo[] | any;

  constructor(private todoAppService: TodoAppService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosList = this.todoAppService.loadDatiLocalStorage();
  }

  updateCompleted(id: number, isCompleted: boolean) {
    this.todoAppService.updateTodos(id, isCompleted);
  }

  rimuoviTodo(id: number) {
    this.todoAppService.rimuoviTodo(id);
    
    const notificaObj: Notifica = {
      notifica: true,
      text: 'todo rimosso'
    }

    this.notificaEvent.emit(notificaObj);
  }
}
