import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';
import { CurrencyPipe } from '@angular/common';
import { CurrencyFormatService } from '../../../services/currency-format-service';

@Component({
  selector: 'app-cost',
  imports: [],
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.css',
  providers: [CurrencyPipe, CurrencyFormatService],
})
export class CostComponent {
  transactions: Transaction[] = [];
  totalCost: number = 0;

  constructor(
    private transactionService: TransactionService,
    private currencyFormatService: CurrencyFormatService
  ) {}

  ngOnInit(): void {
    this.fetchCosts();
  }

  fetchCosts(): void {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data.filter(
          (transaction) =>
            transaction.category !== 'lön' &&
            transaction.category !== 'CSN bidrag'
        );
        this.calculateTotalCost();
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  calculateTotalCost(): void {
    this.totalCost = this.transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    this.transactionService.setCostTotal(this.totalCost);
  }

  getFormattedNegativeAmount(): string {
    return this.currencyFormatService.getFormattedNegativeAmount(
      this.totalCost
    );
  }
}
