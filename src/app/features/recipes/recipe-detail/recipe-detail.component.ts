import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe/recipe.model';
import { Ingredient } from 'src/app/core/models/shopping-list/ingredient.model';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';
import { ShoppingListService } from 'src/app/core/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  ingredients: Ingredient[];
  currentlySelectedRecipeItem$: Observable<Recipe>;

  constructor(
    private _recipesService: RecipesService,
    private _shoppingListServices: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.ingredients = this._shoppingListServices.ingredients;
    this.currentlySelectedRecipeItem$ = this._recipesService.getCurrentlySelectedRecipeItem$();
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListServices.ingredients.push(...ingredients);
  }
}
