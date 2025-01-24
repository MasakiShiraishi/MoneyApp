import { Component } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-balance',
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {
  incomeTotal: number = 0;
  costTotal: number = 0;
  balance: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.incomeTotal$.subscribe((total) => {
      this.incomeTotal = total;
      this.calculateBalance();
    });

    this.transactionService.costTotal$.subscribe((total) => {
      this.costTotal = total;
      this.calculateBalance();
    });
  }
  calculateBalance(): void {
    this.balance = this.incomeTotal - this.costTotal;
  }
}
