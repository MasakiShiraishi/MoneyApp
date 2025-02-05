import { ChangeDetectorRef, Component } from '@angular/core';
import { PaymentSummaryComponent } from '../calculates/payment-summary/payment-summary.component';
import { SaveAccountComponent } from '../save-account/save-account.component';
import { IncomeComponent } from '../calculates/income/income.component';
import { CostComponent } from '../calculates/cost/cost.component';
import { BalanceComponent } from '../calculates/balance/balance.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CurrencyFormatService } from '../../services/currency-format-service';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaymentSummaryComponent,
    SaveAccountComponent,
    IncomeComponent,
    CostComponent,
    BalanceComponent,
    CommonModule,
    MenuComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CurrencyPipe, CurrencyFormatService],
})
export class HomeComponent {
  totalAmount: number = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private currencyFormatService: CurrencyFormatService
  ) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onTotalAmountChange(total: number): void {
    this.totalAmount = total;
    this.cdr.detectChanges();
  }

  getFormatAmount(amount: number): string {
    return this.currencyFormatService.getFormattedAmount(amount);
  }
}
