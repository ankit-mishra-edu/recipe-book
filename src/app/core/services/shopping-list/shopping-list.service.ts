import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/shopping-list/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatoes', 20),
    new Ingredient('Onion', 30),
  ];

  constructor() {}
}
