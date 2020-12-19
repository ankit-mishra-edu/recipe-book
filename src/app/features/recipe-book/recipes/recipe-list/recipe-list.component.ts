import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe/recipe.model';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = this._recipeService.recipes;

  constructor(private _recipeService: RecipesService) {}

  ngOnInit(): void {}
}
