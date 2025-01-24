import { Component } from '@angular/core';
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
  ],
  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css',
})
export class CashbookComponent {
  constructor(private router: Router) {}

  navigateWithDelay(url: string): void {
    setTimeout(() => {
      this.router.navigate([url]);
    }, 2000);
  }
}
