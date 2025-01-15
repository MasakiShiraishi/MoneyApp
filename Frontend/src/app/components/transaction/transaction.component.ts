import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrow-to-home/arrow-to-home.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionGroupSkeletonComponent } from '../skeleton/transaction-group-skeleton/transaction-group-skeleton.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    ArrowToHomeComponent,
    TransactionListComponent,
    HttpClientModule,
    TransactionGroupSkeletonComponent,
    CommonModule,
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
