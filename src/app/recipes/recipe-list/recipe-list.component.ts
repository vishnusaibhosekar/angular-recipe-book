import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/my48xGATJk4_awIF_rfh-zUDB_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shrimp-wedge-salad-with-old-bay-breadcrumbs-and-hot-sauce-dressing-FT-RECIPE0320-03483832e672469b847be43787cf62d0.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/my48xGATJk4_awIF_rfh-zUDB_M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shrimp-wedge-salad-with-old-bay-breadcrumbs-and-hot-sauce-dressing-FT-RECIPE0320-03483832e672469b847be43787cf62d0.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
