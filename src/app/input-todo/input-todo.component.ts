import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoAppService } from '../services/todo-app.service';

import { Notifica } from '../models/notifica';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent implements OnInit {

  @Output() notificaEvent = new EventEmitter<Notifica>(); // Creiamo un evento Output

  constructor(private todoAppService: TodoAppService) { }

  ngOnInit(): void {
  }

  aggiungiTodo(event: Event) {
    const input: string = (
      event.target as HTMLInputElement
    ).value;
    console.log(input);
    this.todoAppService.createNewTodo(input);
    (event.target as HTMLInputElement).value = '';

    const notificaObj: Notifica = {
      notifica: true,
      text: "todo aggiunto"
    }

    this.notificaEvent.emit(notificaObj)
  }
}