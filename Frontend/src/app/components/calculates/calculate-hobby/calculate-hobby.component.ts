import { Component } from '@angular/core';
import { CalculateCategoryComponent } from '../calculate-category/calculate-category.component';

@Component({
  selector: 'app-calculate-hobby',
  standalone: true,
  imports: [CalculateCategoryComponent],
  template: '<app-calculate-category [category]="category" [subCategories]="hobbySubCategories"></app-calculate-category>',
  styleUrl: './calculate-hobby.component.css'
})
export class CalculateHobbyComponent {
  category: string = 'hobby';
  hobbySubCategories: string[] = [
    'hobby',
    'education',   
  ];

}
