import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-payment-summary',
  imports: [],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.css',
  providers: [CurrencyPipe],
})
export class PaymentSummaryComponent {
  transactions: Transaction[] = [];
  totalByPayment: { [key: string]: number } = {};

  constructor(
    private transactionService: TransactionService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.fetchPaymentSummary();
  }

  fetchPaymentSummary(): void {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
        this.totalByPayment = this.transactionService.calculateTotalByPayment(this.transactions);
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }
  getFormattedAmount(amount: number): string {
    const negativeAmount = -amount;
    const formattedAmount = this.currencyPipe.transform(negativeAmount, 'SEK', 'symbol', '1.0-0');
    return formattedAmount ? formattedAmount.replace('SEK', '').trim() : '0';
  }
  
}
