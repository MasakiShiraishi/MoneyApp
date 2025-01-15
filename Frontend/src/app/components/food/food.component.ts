import { Component } from '@angular/core';
import { ArrowToCashbookComponent } from "../arrow-to-cashbook/arrow-to-cashbook.component";

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [ArrowToCashbookComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {

}
