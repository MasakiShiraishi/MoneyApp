import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-calculate-food',
  imports: [],
  templateUrl: './calculate-food.component.html',
  styleUrl: './calculate-food.component.css',
})
export class CalculateFoodComponent implements OnInit {
  transactions: Transaction[] = [];
  totalFoodsAmount: number = 0;
  constructor(private transactionService: TransactionService) {}
  ngOnInit(): void {
    this.fetchTransactions();
  }
  async fetchTransactions(): Promise<void> {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        (this.transactions = data), this.calculateTotalFoodsAmount();
      },
      (error: any) => console.error('Error fetching transactions:', error)
    );
  }
  calculateTotalFoodsAmount(): void {
    const filteredFoodsTransactions = this.transactions.filter(
      (transaction) => transaction.category === 'foods'
    );
    this.totalFoodsAmount = filteredFoodsTransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  }
}