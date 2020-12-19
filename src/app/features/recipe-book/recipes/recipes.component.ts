import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
