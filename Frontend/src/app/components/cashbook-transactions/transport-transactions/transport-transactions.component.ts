import { Component } from '@angular/core';
import { TransactionListComponent } from '../../transaction-list/transaction-list.component';
import { HeaderToCashbookComponent } from '../header-to-cashbook/header-to-cashbook.component';

@Component({
  selector: 'app-transport-transactions',
  standalone: true,
  imports: [TransactionListComponent, HeaderToCashbookComponent],
  template: `
    <app-header-to-cashbook [category]="category"></app-header-to-cashbook>
    <app-transaction-list
      [category]="category"
      [subCategories]="transportsSubCategories"
    ></app-transaction-list>
  `,

  styleUrl: './transport-transactions.component.css',
})
export class TransportTransactionsComponent {
  category: string = 'transport';
  transportsSubCategories: string[] = [
    'transport',
    'car_insurance',
    'train_ticket',
    'gasoline',
    'travel',
  ];
}
