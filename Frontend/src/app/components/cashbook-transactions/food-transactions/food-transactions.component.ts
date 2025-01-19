import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-food-transactions',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './food-transactions.component.html',
  styleUrl: './food-transactions.component.css'
})
export class FoodTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  lastDate: string | null = null;
  constructor(private transactionService: TransactionService) {}
  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }
  shouldShowDate(currentDate: string, lastDate: string | null): boolean {
    return currentDate !== lastDate;
  }
  formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('sv-SE', options);

}
}
