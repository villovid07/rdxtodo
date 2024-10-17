import { createAction, props } from "@ngrx/store";
import { filtrosValidos } from "./filtro.reducer";


export const setFiltro = createAction(
    '[Filtro] Set filtro', 
    props<{filtro:string}>()
);