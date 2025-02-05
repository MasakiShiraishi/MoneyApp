import { Component, OnInit } from '@angular/core';
import { ArrowToHomeComponent } from '../arrows/arrow-to-home/arrow-to-home.component';
import { CalculateFoodComponent } from '../calculates/calculate-food/calculate-food.component';
import { CalculateAccommodationComponent } from '../calculates/calculate-accommodation/calculate-accommodation.component';
import { CalculateClotheComponent } from '../calculates/calculate-clothe/calculate-clothe.component';
import { CalculateHobbyComponent } from '../calculates/calculate-hobby/calculate-hobby.component';
import { CalculateTransportComponent } from '../calculates/calculate-transport/calculate-transport.component';
import { IncomeComponent } from '../calculates/income/income.component';
import { CostComponent } from '../calculates/cost/cost.component';
import { BalanceComponent } from '../calculates/balance/balance.component';
import { RouterModule, Router } from '@angular/router';
import { ChartComponent } from '../chart/chart.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { MenuComponent } from "../menu/menu.component";

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
    IncomeComponent,
    CostComponent,
    BalanceComponent,
    RouterModule,
    ChartComponent,
    CommonModule,
    HttpClientModule,
    MenuComponent
],

  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css',
})
export class CashbookComponent implements OnInit {
  transactions: Transaction[] = [];
  chartData: { category: string; total: number }[] = [];

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}
  navigateWithDelay(url: string): void {
    setTimeout(() => {
      this.router.navigate([url]);
    }, 2000);
  }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions:', error); // debug
      }
    );
  }
}
