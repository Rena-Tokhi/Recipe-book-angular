import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : recipes [] = [
    new recipes ('A test recipe', 'this is simply a test','https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
