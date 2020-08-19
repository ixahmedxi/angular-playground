import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'todolist',
    component: TodolistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
