import { Component } from '@angular/core';
import { ArrowToCashbookComponent } from "../arrow-to-cashbook/arrow-to-cashbook.component";
import { FoodTransactionsComponent } from "../cashbook-transactions/food-transactions/food-transactions.component";

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [ArrowToCashbookComponent, FoodTransactionsComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {

}
