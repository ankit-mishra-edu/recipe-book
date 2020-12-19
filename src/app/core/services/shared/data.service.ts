import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../../models/recipe/recipe.model';

import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _router: Router) {}

  // Data storage for latest/curretly selected recipe to fetch details for
  private _currentlySelectedRecipeItemSubject$ = new BehaviorSubject<Recipe>(
    new Recipe('', '', '', [])
  );
  private _currentlyRecipeItemSelected$ = this._currentlySelectedRecipeItemSubject$.asObservable();

  getCurrentlySelectedRecipeItem$() {
    return this._currentlyRecipeItemSelected$;
  }

  setCurrentlySelectedRecipeItem$(recipeItem: Recipe) {
    this._currentlySelectedRecipeItemSubject$.next(recipeItem);
  }

  // Data storage for which navigation bar to show
  private _currentRouteParams$ = this._router.events.pipe(
    filter((event: NavigationStart) => event instanceof NavigationStart),
    map((event: NavigationStart) => event.url)
  );

  getCurrentRouteParam$() {
    return this._currentRouteParams$;
  }
}
