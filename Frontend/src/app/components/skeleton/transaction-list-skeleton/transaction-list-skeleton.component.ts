import { Component } from '@angular/core';
import { SingleTransactionSkeletonComponent } from '../single-transaction-skeleton/single-transaction-skeleton.component';

@Component({
  selector: 'app-transaction-list-skeleton',
  standalone: true,
  imports: [SingleTransactionSkeletonComponent],
  templateUrl: './transaction-list-skeleton.component.html',
  styleUrl: './transaction-list-skeleton.component.css'
})
export class TransactionListSkeletonComponent {

}
