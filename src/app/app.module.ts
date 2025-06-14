import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoBoxComponent } from './todo-box/todo-box.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { NotificaComponent } from './notifica/notifica.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBoxComponent,
    InputTodoComponent,
    TodoFooterComponent,
    RegisterComponent,
    TodoComponent,
    LoginComponent,
    NotificaComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
