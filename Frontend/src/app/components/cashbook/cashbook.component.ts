import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrow-to-home/arrow-to-home.component';
import { CalculateFoodComponent } from '../calculates/calculate-food/calculate-food.component';
import { CalculateAccommodationComponent } from '../calculates/calculate-accommodation/calculate-accommodation.component';
import { CalculateClotheComponent } from '../calculates/calculate-clothe/calculate-clothe.component';
import { CalculateHobbyComponent } from '../calculates/calculate-hobby/calculate-hobby.component';
import { CalculateTransportComponent } from '../calculates/calculate-transport/calculate-transport.component';

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
  ],
  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css',
})
export class CashbookComponent {}
