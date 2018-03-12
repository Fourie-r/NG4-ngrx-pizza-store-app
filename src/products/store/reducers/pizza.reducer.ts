import * as fromActions from '../actions';
import { Pizza } from '../../models/pizza.model';



//Creating a state interface for the pizzas state
export interface PizzaState {
    pizzas: Pizza[];
    loading: boolean;
    loaded: boolean;
}

// Creating the initial pizza state 
export const initialState: PizzaState = {
    pizzas: [],
    loading: false,
    loaded: false
}

// Creating the first pizza state reducer
export function reducer( state = initialState, action: fromActions.PizzaActions): PizzaState {

    switch(action.type) {
        case fromActions.LOAD_PIZZAS: {

            return {...state, loading: true};
        }
        
        case fromActions.LOAD_PIZZAS_SUCCESS: {

            return {...state, loading: false, loaded: true, pizzas: action.payload};
        }

        case fromActions.LOAD_PIZZAS_FAIL: {
            
            return {...state, loaded: false, loading: false }
        }

    }
    return state;
}


// export all the parts of the Pizza state to be used for the selectors

export const getAllPizzas = (state: PizzaState) => state.pizzas;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;