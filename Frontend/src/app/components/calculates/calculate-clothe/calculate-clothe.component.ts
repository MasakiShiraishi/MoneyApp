import { Component } from '@angular/core';
import { CalculateCategoryComponent } from "../calculate-category/calculate-category.component";

@Component({
  selector: 'app-calculate-clothe',
  standalone: true,
  imports: [CalculateCategoryComponent],
  template: '<app-calculate-category [category]="category" [subCategories]="clothesSubCategories"></app-calculate-category>',
  styleUrl: './calculate-clothe.component.css'
})
export class CalculateClotheComponent {
  category: string = 'clothes';
  clothesSubCategories: string[] = [
    'shoes',
    'accessories',
    'clothes'
  ];
}
