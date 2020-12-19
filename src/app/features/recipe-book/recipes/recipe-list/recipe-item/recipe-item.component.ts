import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe/recipe.model';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipe: Recipe;

  constructor(private _recipesService: RecipesService) {}

  ngOnInit(): void {}

  setCurrentRecipeSelected(recipeItem: Recipe) {
    this._recipesService.setCurrentlySelectedRecipeItem$(recipeItem);
  }
}
