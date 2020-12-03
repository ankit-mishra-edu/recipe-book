import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'recipes',
    loadChildren: () =>
      import('../app/features/recipes/recipes.module').then(
        (m) => m.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('../app/features/shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
