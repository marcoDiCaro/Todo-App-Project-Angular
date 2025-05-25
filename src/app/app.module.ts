import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TodoBoxComponent } from './todo-box/todo-box.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBoxComponent,
    InputTodoComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
