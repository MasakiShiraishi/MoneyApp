import { Component } from '@angular/core';
import { ArrowToCashbookComponent } from '../../arrows/arrow-to-cashbook/arrow-to-cashbook.component';
import { TransactionListComponent } from '../../transaction-list/transaction-list.component';
import { CategoryTranslatePipe } from '../../../pipes/category-translate.pipe';
import { HeaderCategoryTranslatePipe } from '../../../pipes/header-category-translate.pipe';
import { HeaderToCashbookComponent } from '../header-to-cashbook/header-to-cashbook.component';

@Component({
  selector: 'app-hobby-transactions',
  standalone: true,
  imports: [TransactionListComponent, HeaderToCashbookComponent],
  template: `
    <app-header-to-cashbook [category]="category"></app-header-to-cashbook>
    <app-transaction-list
      [category]="category"
      [subCategories]="hobbySubCategories"
    ></app-transaction-list>
  `,
  styleUrl: './hobby-transactions.component.css',
})
export class HobbyTransactionsComponent {
  category: string = 'hobby';
  hobbySubCategories: string[] = ['hobby', 'education'];
}
