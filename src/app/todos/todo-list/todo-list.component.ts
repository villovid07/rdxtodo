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
  filtroActual: string = 'todos';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    //Destructuring has been done hereto avoid state.something 
    this.store.subscribe( ({todos, filtro}) =>{
      this.todos = todos;
      this.filtroActual= filtro;
    })
  }
}
