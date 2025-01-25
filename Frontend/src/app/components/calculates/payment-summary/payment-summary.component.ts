import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';
import { CurrencyPipe } from '@angular/common';
import { CurrencyFormatService } from '../../../services/currency-format-service';

@Component({
  selector: 'app-payment-summary',
  imports: [],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.css',
  providers: [CurrencyPipe, CurrencyFormatService],
})
export class PaymentSummaryComponent {
  transactions: Transaction[] = [];
  totalByPayment: { [key: string]: number } = {};

  constructor(
    private transactionService: TransactionService,
    private currencyFormatService: CurrencyFormatService
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

  getFormattedNegativeAmount(amount: number): string {
    return this.currencyFormatService.getFormattedNegativeAmount(amount);
  }
}
