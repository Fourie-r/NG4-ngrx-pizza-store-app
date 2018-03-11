import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';


import * as fromPizzaActions from '../actions';
import * as fromPizzaReducer from './pizza.reducer';

export interface ProductsState {
    pizzas: fromPizzaReducer.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {

    pizzas: fromPizzaReducer.reducer

};

// Create the top level selector using the inbuild store function "createFeatureSelector"
// Create all subsequent state selectors from it
export const getProductsFeature = createFeatureSelector<ProductsState>('products');
export const getPizzaProducts = createSelector(getProductsFeature, (state:ProductsState) => state.pizzas);
export const getAllPizzas = createSelector(getPizzaProducts, fromPizzaReducer.getAllPizzas);
export const getAllPizzasLoading = createSelector(getPizzaProducts, fromPizzaReducer.getPizzasLoading);
export const getAllPizzasLoaded = createSelector(getPizzaProducts, fromPizzaReducer.getPizzasLoaded);