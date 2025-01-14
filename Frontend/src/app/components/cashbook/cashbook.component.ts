import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrow-to-home/arrow-to-home.component';

@Component({
  selector: 'app-cashbook',
  standalone: true,
  imports: [ArrowToHomeComponent],
  templateUrl: './cashbook.component.html',
  styleUrl: './cashbook.component.css'
})
export class CashbookComponent {

}
