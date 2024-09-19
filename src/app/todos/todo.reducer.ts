import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, editar, toggle } from './todo.actions';
import { TodoItemComponent } from './todo-item/todo-item.component';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Dormir'),
  new Todo('Comprar comida'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => {
    return [...state, new Todo(texto)];
  }),
  on(toggle, (state, { id }) => {
    return state.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          completado: !item.completado,
        };
      } else {
        return item;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          texto: texto,
        };
      } else {
        return item;
      }
    });
  })
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
