import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipes.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a Sample of Recipe",
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Vegetarian_pizza.jpg"),
    new Recipe("A Test Recipe", "This is a Sample of Recipe",
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Vegetarian_pizza.jpg")
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
