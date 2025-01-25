import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyFormatService } from '../../services/currency-format-service';

@Component({
  selector: 'app-save-account',
  imports: [],
  templateUrl: './save-account.component.html',
  styleUrl: './save-account.component.css',
  providers: [CurrencyPipe, CurrencyFormatService],
})
export class SaveAccountComponent implements OnInit {
  icaAmount: number = 30000;
  avanzaAmount: number = 50000;
  totalAmount: number = 0;

  constructor(private currencyFormatservice: CurrencyFormatService) {}

  @Output() totalAmountChange: EventEmitter<number> =
    new EventEmitter<number>();

  ngOnInit(): void {
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.icaAmount + this.avanzaAmount;
    this.totalAmountChange.emit(this.totalAmount);
  }

  getFormattedAmount(amount: number): string {
    return this.currencyFormatservice.getFormattedAmount(amount);
  }
}
