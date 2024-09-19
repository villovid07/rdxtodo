import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => {
    return [...state, new Todo(texto)];
  })
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}
