import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  public completado:boolean = false;

  constructor(private store: Store<AppState>) {
  }

  toggleAll(){
    this.completado= !this.completado;
    console.log("click al toggle");
    this.store.dispatch(toggleAll({completado: this.completado}))
  }
}
