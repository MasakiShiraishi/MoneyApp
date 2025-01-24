import { Component } from '@angular/core';
import { PaymentSummaryComponent } from "../calculates/payment-summary/payment-summary.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaymentSummaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
