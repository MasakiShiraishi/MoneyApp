import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrow-to-home/arrow-to-home.component';
import { CalculateFoodComponent } from "../calculates/calculate-food/calculate-food.component";

@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [ArrowToHomeComponent, CalculateFoodComponent],
  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css'
})
export class CashbookComponent {

}
