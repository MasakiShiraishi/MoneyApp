import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-payment-summary',
  imports: [],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.css'
})
export class PaymentSummaryComponent {
  transactions: Transaction[] = [];
  totalByPayment: {[key: string]: number} = {};

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void{
    this.fetchPaymentSummary();
  }

  fetchPaymentSummary(): void {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
      this.transactions = data;
      this.totalByPayment = this.transactionService.calculateTotalByPayment(this.transactions);
    },
    (error) => {
      console.error('Error fetching transactions',error);
    }
  );
  }
}
