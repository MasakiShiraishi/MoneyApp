import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrow-to-home/arrow-to-home.component';
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [ArrowToHomeComponent, TransactionListComponent, HttpClientModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

}
