import { Component } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction';
import { CurrencyPipe } from '@angular/common';
import { CurrencyFormatService } from '../../../services/currency-format-service';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
  providers: [CurrencyPipe, CurrencyFormatService],
})
export class IncomeComponent {
  transactions: Transaction[] = [];
  totalAmount: number = 0;

  constructor(
    private transactionService: TransactionService,
    private currencyFormatService: CurrencyFormatService
  ) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data.filter(
          (transaction) =>
            transaction.category === 'lön' ||
            transaction.category === 'CSN bidrag'
        );
        this.calculateTotalAmount();
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    this.transactionService.setIncomeTotal(this.totalAmount);
  }

  getFormattedAmount(): string {
    return this.currencyFormatService.getFormattedAmount(this.totalAmount);
  }
}
