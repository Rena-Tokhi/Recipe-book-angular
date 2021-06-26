import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredients []= [
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes', 4),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
