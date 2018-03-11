import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';
// Creating the action constants
export const LOAD_PIZZAS = '[Products] - LOAD_PIZZAS';
export const LOAD_PIZZAS_SUCCESS = '[Products] - LOAD_PIZZAS_SUCCESS';
export const LOAD_PIZZAS_FAIL = '[Products] - LOAD_PIZZAS_FAIL';

// Creating the action creators

export class LoadPizzas implements Action {

    readonly type = LOAD_PIZZAS;
}

export class LoadPizzas_Success implements Action {

    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor( public payload: Pizza[] ) { }
}

export class LoadPizzas_Success_Fail implements Action {

    readonly type = LOAD_PIZZAS_FAIL;
    constructor( public payload: any ) { }
}


// export all action types

export type PizzaActions =  LoadPizzas | LoadPizzas_Success | LoadPizzas_Success_Fail;