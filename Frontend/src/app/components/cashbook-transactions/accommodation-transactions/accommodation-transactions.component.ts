import { Component } from '@angular/core';
import { TransactionListComponent } from '../../transaction-list/transaction-list.component';
import { HeaderToCashbookComponent } from '../header-to-cashbook/header-to-cashbook.component';

@Component({
  selector: 'app-accommodation-transactions',
  standalone: true,
  imports: [TransactionListComponent, HeaderToCashbookComponent],
  template: `
    <app-header-to-cashbook [category]="category"></app-header-to-cashbook>
    <app-transaction-list
      [category]="category"
      [subCategories]="accommodationSubCategories"
    ></app-transaction-list>
  `,
  styleUrl: './accommodation-transactions.component.css',
})
export class AccommodationTransactionsComponent {
  category: string = 'accommodation';
  accommodationSubCategories: string[] = [
    'health',
    'rent',
    'internet',
    'utilities',
  ];
}
