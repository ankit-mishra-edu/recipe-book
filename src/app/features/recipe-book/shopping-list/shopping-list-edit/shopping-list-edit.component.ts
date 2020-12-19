import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/core/models/shopping-list/ingredient.model';
import { ShoppingListService } from 'src/app/core/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onIngredientAdd(name: string, amount: number) {
    const newIngredient = new Ingredient(name, amount);
    this._shoppingListService.ingredients.push(newIngredient);
  }
}
