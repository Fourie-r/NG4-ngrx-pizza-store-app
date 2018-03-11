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
    pizzas: [{
        "name": "Blazin' Inferno",
        "toppings": [
          {
            "id": 10,
            "name": "pepperoni"
          },
          {
            "id": 9,
            "name": "pepper"
          },
          {
            "id": 3,
            "name": "basil"
          },
          {
            "id": 4,
            "name": "chili"
          },
          {
            "id": 7,
            "name": "olive"
          },
          {
            "id": 2,
            "name": "bacon"
          }
        ],
        "id": 1
      }],
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

            return {...state, loading: false, loaded: true};
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