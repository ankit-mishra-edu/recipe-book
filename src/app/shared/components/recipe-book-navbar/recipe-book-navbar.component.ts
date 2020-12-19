import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-book-navbar',
  templateUrl: './recipe-book-navbar.component.html',
  styleUrls: ['./recipe-book-navbar.component.scss'],
})
export class RecipeBookNavbarComponent implements OnInit {
  @Input('titleUnColored') titleUnColored: string;
  @Input('titleColored') titleColored: string;

  constructor() {}

  ngOnInit(): void {}
}
