import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';


export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const initialState:string ='todos';

const _filtroReducer = createReducer(initialState,
    on(setFiltro ,(state,{filtro})=>{ console.log(filtro); return filtro; })
);


export function filtroReducer(state: any, action:any) {
    return _filtroReducer(state, action);
}
  