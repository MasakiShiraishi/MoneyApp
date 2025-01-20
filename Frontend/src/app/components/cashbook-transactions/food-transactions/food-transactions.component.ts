import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from '../../transaction-list/transaction-list.component';
import { HeaderToCashbookComponent } from '../header-to-cashbook/header-to-cashbook.component';

@Component({
  selector: 'app-food-transactions',
  standalone: true,
  imports: [TransactionListComponent, HeaderToCashbookComponent],
  template: `
    <app-header-to-cashbook [category]="category"></app-header-to-cashbook>
    <app-transaction-list
      [category]="category"
      [subCategories]="foodsSubCategories"
    ></app-transaction-list>
  `,

  styleUrl: './food-transactions.component.css',
})
export class FoodTransactionsComponent {
  category: string = 'foods';
  foodsSubCategories: string[] = ['foods', 'restaurant', 'snack', 'drink'];
}
