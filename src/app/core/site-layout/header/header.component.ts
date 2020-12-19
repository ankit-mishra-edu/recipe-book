import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentRoute$ = this._recipesService.getCurrentRouteParam$();
  constructor(private _recipesService: RecipesService) {}

  ngOnInit(): void {}

  isRecipeBookRoute(currentRoute: string) {
    return currentRoute.startsWith('/recipe-book');
  }
}
