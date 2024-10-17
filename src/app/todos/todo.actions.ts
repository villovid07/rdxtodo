import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] toggle todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar todo',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar todo',
  props<{ id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Marcar todos',
  props<{ completado: boolean}>()
);


export const limpiarCompletados = createAction(
  '[TODO] Limpiar completados'
);

