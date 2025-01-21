import { Component, OnInit } from '@angular/core';
import { ArrowToHomeComponent } from '../arrows/arrow-to-home/arrow-to-home.component';
import { CalculateFoodComponent } from '../calculates/calculate-food/calculate-food.component';
import { CalculateAccommodationComponent } from '../calculates/calculate-accommodation/calculate-accommodation.component';
import { CalculateClotheComponent } from '../calculates/calculate-clothe/calculate-clothe.component';
import { CalculateHobbyComponent } from '../calculates/calculate-hobby/calculate-hobby.component';
import { CalculateTransportComponent } from '../calculates/calculate-transport/calculate-transport.component';
import { ChartComponent } from '../chart/chart.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [
    ArrowToHomeComponent,
    CalculateFoodComponent,
    CalculateAccommodationComponent,
    CalculateClotheComponent,
    CalculateHobbyComponent,
    CalculateTransportComponent,
    ChartComponent,
    CommonModule,
    HttpClientModule,

  ],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css',
})
export class CashbookComponent implements OnInit {
  transactions: Transaction[] = [];
  chartData: { category: string; total: number }[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
        console.log('Fetched transactions:', this.transactions);
        this.calculateChartData();
      },
      (error) => {
        console.error('Error fetching transactions:', error); // debug
      }
    );
  }

  calculateChartData(): void {
    const categoryTotals: { [category: string]: number } = {};
    this.transactions.forEach((transaction) => {
      const category = transaction.category;
      const amount =
        transaction.payment === 'AMEX' ||
        transaction.payment === 'ICA' ||
        transaction.payment === 'Bank Transfer'
          ? -transaction.amount
          : transaction.amount;
      if (categoryTotals[category]) {
        categoryTotals[category] += amount;
      } else {
        categoryTotals[category] = amount;
      }
    });
    this.chartData = Object.keys(categoryTotals).map((category) => ({
      category,
      total: categoryTotals[category],
    }));
    console.log('Calculated chart data:', this.chartData);// debug
  }
}
