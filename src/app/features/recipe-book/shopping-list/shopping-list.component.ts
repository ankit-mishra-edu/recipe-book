import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/shopping-list/ingredient.model';
import { ShoppingListService } from 'src/app/core/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = this._shoppingListService.ingredients;

  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onIngredientDelete(indexOfIngredientToBeDeleted: number) {
    this.ingredients.splice(indexOfIngredientToBeDeleted, 1);
  }
}
