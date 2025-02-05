import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrows/arrow-to-home/arrow-to-home.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    ArrowToHomeComponent,
    TransactionListComponent,
    HttpClientModule,
    CommonModule,
    MenuComponent
],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
}
