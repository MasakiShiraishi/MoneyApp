import { Component } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cost',
  imports: [],
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.css',
  providers: [CurrencyPipe],
})
export class CostComponent {
  transactions: Transaction[] = [];
  totalCost: number = 0;

  constructor(
    private transactionService: TransactionService,
    private currencyPipe: CurrencyPipe
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
    this.totalCost = -this.totalCost;
  }
  getFormattedTotalCost(): string {
    const formattedTotalCost = this.currencyPipe.transform(
      this.totalCost,
      'SEK',
      'symbol',
      '1.0-0'
    );
    return formattedTotalCost
      ? formattedTotalCost.replace('SEK', '').trim()
      : '0';
  }
}
