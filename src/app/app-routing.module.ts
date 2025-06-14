import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // rotta di default
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: TodoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}