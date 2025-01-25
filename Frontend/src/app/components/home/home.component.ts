import { ChangeDetectorRef, Component } from '@angular/core';
import { PaymentSummaryComponent } from '../calculates/payment-summary/payment-summary.component';
import { SaveAccountComponent } from '../save-account/save-account.component';
import { IncomeComponent } from '../calculates/income/income.component';
import { CostComponent } from '../calculates/cost/cost.component';
import { BalanceComponent } from '../calculates/balance/balance.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaymentSummaryComponent,
    SaveAccountComponent,
    IncomeComponent,
    CostComponent,
    BalanceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CurrencyPipe],
})
export class HomeComponent {
  totalAmount: number = 0;

  constructor(private cdr: ChangeDetectorRef, private currencyPipe: CurrencyPipe) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onTotalAmountChange(total: number): void {
    this.totalAmount = total;
    this.cdr.detectChanges();
  }
  getFormattedAmount(amount: number): string {
    const formattedAmount = this.currencyPipe.transform(amount, 'SEK', 'symbol', '1.0-0');
    return formattedAmount ? formattedAmount.replace('SEK', '').trim() : '0';
  }

}
