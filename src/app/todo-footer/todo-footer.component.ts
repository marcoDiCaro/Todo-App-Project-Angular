import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { TodoAppService } from '../services/todo-app.service';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  todosList: Todo[] = [];

  @Output() filterEvent = new EventEmitter<Todo[]>(); // Creiamo un evento Output

  constructor(private todoAppService: TodoAppService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosList = this.todoAppService.getTodosList();
  }

  filterTodos(type: 'all' | 'completed' | 'active') {
    let filteredTodos: Todo[];

    switch (type) {
      case 'completed':
        filteredTodos = this.todosList.filter((todo) => todo.completed);
        break;
      case 'active':
        filteredTodos = this.todosList.filter((todo) => !todo.completed);
        break;
      default:
        filteredTodos = [...this.todosList];
    }

    this.filterEvent.emit(filteredTodos);
  }

  clearTodo() {
    this.todoAppService.clearCompleted();
    this.loadTodos();
  }
}
