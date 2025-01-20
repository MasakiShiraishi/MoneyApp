import { Component } from '@angular/core';
import { TransactionListComponent } from '../../transaction-list/transaction-list.component';
import { HeaderToCashbookComponent } from '../header-to-cashbook/header-to-cashbook.component';

@Component({
  selector: 'app-clothe-transactions',
  imports: [TransactionListComponent, HeaderToCashbookComponent],
  template: `
    <app-header-to-cashbook [category]="category"></app-header-to-cashbook>
    <app-transaction-list
      [category]="category"
      [subCategories]="clothesSubCategories"
    ></app-transaction-list>
  `,
  styleUrl: './clothe-transactions.component.css',
})
export class ClotheTransactionsComponent {
  category: string = 'clothes';
  clothesSubCategories: string[] = ['shoes', 'accessories', 'clothes'];
}
