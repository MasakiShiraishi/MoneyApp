import { Component } from '@angular/core';
import { CalculateCategoryComponent } from '../calculate-category/calculate-category.component';

@Component({
  selector: 'app-calculate-transport',
  standalone: true,
  imports: [CalculateCategoryComponent],
  template: '<app-calculate-category [category]="category" [subCategories]="transportsSubCategories"></app-calculate-category>',
  styleUrl: './calculate-transport.component.css'
})
export class CalculateTransportComponent {
  category: string = 'transport';
  transportsSubCategories: string[] = [
    'transport',
    'car_insurance',
    'train_ticket',
    'gasoline',
    'travel',
  ];

}
