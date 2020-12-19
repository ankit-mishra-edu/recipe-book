import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'recipe-book',
    loadChildren: () =>
      import('../app/features/recipe-book/recipe-book.module').then(
        (m) => m.RecipeBookModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
