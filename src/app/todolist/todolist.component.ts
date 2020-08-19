import { Component, OnInit } from '@angular/core';

interface ITodo {
  id: number;
  text: string;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoInputValue = '';
  todos: ITodo[] = [
    {
      id: 0,
      text: 'Improve lop.si',
    },
  ];

  addTodo = (e) => {
    e.preventDefault();
    this.todos = [
      ...this.todos,
      { id: this.todos.length, text: this.todoInputValue },
    ];
  };

  removeTodo = (id: number) =>
    (this.todos = this.todos.filter((item) => item.id !== id));

  constructor() {}

  ngOnInit(): void {}
}
