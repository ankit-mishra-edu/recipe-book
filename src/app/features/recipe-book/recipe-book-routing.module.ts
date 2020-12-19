import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const recipeBookRoutes: Routes = [
  {
    path: 'recipes',
    loadChildren: () =>
      import('../recipe-book/recipes/recipes.module').then(
        (m) => m.RecipesModule
      ),
  },

  {
    path: 'shopping-list',
    loadChildren: () =>
      import('../recipe-book/shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeBookRoutes)],
  exports: [RouterModule],
})
export class RecipeBookRoutingModule {}
