import { Actions, Effect } from '@ngrx/effects';

import { Injectable } from '@angular/core';

import * as pizzaActions from '../store/actions';
import { PizzasService } from '../services/pizzas.service';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PizzaEffects {

    constructor(private action$: Actions, private pizzaService: PizzasService) { }

    @Effect()
    loadPizzas$ = this.action$.ofType(pizzaActions.LOAD_PIZZAS)
    .pipe(
        switchMap( () => this.pizzaService.getPizzas().pipe(
            map(pizzas => new pizzaActions.LoadPizzas_Success(pizzas)),
            catchError(err => of(new pizzaActions.LoadPizzas_Success_Fail(err)))
        )
    ));
    
}