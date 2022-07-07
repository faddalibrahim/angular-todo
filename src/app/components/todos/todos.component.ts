import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Task 1',
        completed: false,
      },
      {
        content: 'Task 2',
        completed: false,
      },
      {
        content: 'Task 3',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo, index) => index != id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
