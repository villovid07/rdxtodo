import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('todos').subscribe((todos) => (this.todos = todos));
  }
}
