import { Component } from '@angular/core';
import { CalculateCategoryComponent } from '../calculate-category/calculate-category.component';

@Component({
  selector: 'app-calculate-accommodation',
  standalone: true,
  imports: [CalculateCategoryComponent],
  template:
    '<app-calculate-category [category]="category" [subCategories]="accommodationSubCategories"></app-calculate-category>',
  styleUrl: './calculate-accommodation.component.css',
})
export class CalculateAccommodationComponent {
  category: string = 'accommodation';
  accommodationSubCategories: string[] = [
    'health',
    'rent',
    'internet',
    'utilities'
  ];
}
