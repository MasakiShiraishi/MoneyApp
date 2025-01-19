import { Component } from '@angular/core';
import { CalculateCategoryComponent } from '../calculate-category/calculate-category.component';

@Component({
  selector: 'app-calculate-food',
  standalone: true,
  imports: [CalculateCategoryComponent],
  template:
    '<app-calculate-category [category]="category" [subCategories]="foodsSubCategories"></app-calculate-category>',
  styleUrl: './calculate-food.component.css',
})
export class CalculateFoodComponent {
  category: string = 'foods';
  foodsSubCategories: string[] = ['foods', 'restaurant', 'snack', 'drink'];
}
