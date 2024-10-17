import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFiltro } from 'src/app/filtro/filtro.actions';
import { filtrosValidos } from 'src/app/filtro/filtro.reducer';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1916672236.
  filtroActual: string = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes : number = 0;
  constructor( private store: Store<AppState>){

  }

  ngOnInit(){
    this.store.select('filtro').subscribe(valor =>{
      this.filtroActual= valor;
    })

    this.store.subscribe( state =>{
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo=> !todo.completado).length;
    });
  }

  cambiarFiltro(filtro:string){
    this.store.dispatch(setFiltro({filtro: filtro}))
  }
  
  limpiarCompletados(){
    this.store.dispatch(limpiarCompletados());
  }

}
