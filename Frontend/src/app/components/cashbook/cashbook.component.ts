import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrow-to-home/arrow-to-home.component';
import { CalculateFoodComponent } from "../calculates/calculate-food/calculate-food.component";
import { CalculateAccommodationComponent } from "../calculates/calculate-accommodation/calculate-accommodation.component";

@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [ArrowToHomeComponent, CalculateFoodComponent, CalculateAccommodationComponent],
  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css'
})
export class CashbookComponent {

}
