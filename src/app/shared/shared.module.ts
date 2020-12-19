import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticationNavbarComponent } from './components/authentication-navbar/authentication-navbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RecipeBookNavbarComponent } from './components/recipe-book-navbar/recipe-book-navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    RecipeBookNavbarComponent,
    AuthenticationNavbarComponent,
    LeftSidebarComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RecipeBookNavbarComponent,
    AuthenticationNavbarComponent,
    LeftSidebarComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
