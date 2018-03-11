import { ActionReducerMap } from '@ngrx/store';


import * as fromPizzaActions from './actions';
import * as fromPizzaReducer from './reducers';

export interface ProductsState {
    pizzas: fromPizzaReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {

    pizzas: fromPizzaReducer.reducer

};
