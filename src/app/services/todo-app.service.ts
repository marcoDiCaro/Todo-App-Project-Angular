import { Injectable } from '@angular/core';

class Todo {
  id: number;
  text: string;
  completed: boolean;
  constructor(id: number = 0, text: string, completed: boolean = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TodoAppService {
  private todosList: Todo[] = [];

  constructor() {}

  getTodosList(): Todo[] {
    return this.todosList;
  }

  loadDatiLocalStorage(): Todo[] {
    const datiString = localStorage.getItem('todos');
    if (datiString) {
      const dati: Todo[] = JSON.parse(datiString);
      if (dati && dati.length > 0) {
        this.todosList = dati;
      }
    }
    return this.todosList;
  }

  createNewTodo(input: string) {
    const id = this.todosList.length + 1;
    const todoObj = new Todo(id, input);
    this.todosList.push(todoObj);
    localStorage.setItem('todos', JSON.stringify(this.todosList)); // Salvo dati nel localStorage (usando JSON)
  };

  updateTodos(id: number, isCompleted: boolean) {
    const todo = this.todosList.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = isCompleted;
    }
    //console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todosList)); // Salvo dati nel localStorage (usando JSON)
  };

  clearCompleted() {
    const listaFiltered = this.todosList.filter((todo) => !todo.completed);
    this.todosList = listaFiltered;
    localStorage.setItem('todos', JSON.stringify(this.todosList)); // Salvo dati nel localStorage (usando JSON)
  };

  rimuoviTodo(id: number) {
    const index = this.todosList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todosList.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(this.todosList)); // Salvo dati nel localStorage (usando JSON)
  };
}