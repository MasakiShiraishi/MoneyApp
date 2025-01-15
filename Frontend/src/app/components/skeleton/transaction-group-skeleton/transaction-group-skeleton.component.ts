import { Component } from '@angular/core';
import { TransactionListSkeletonComponent } from '../transaction-list-skeleton/transaction-list-skeleton.component';

@Component({
  selector: 'app-transaction-group-skeleton',
  standalone: true,
  imports: [TransactionListSkeletonComponent],
  templateUrl: './transaction-group-skeleton.component.html',
  styleUrl: './transaction-group-skeleton.component.css'
})
export class TransactionGroupSkeletonComponent {

}
