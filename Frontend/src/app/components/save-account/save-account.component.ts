import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-save-account',
  imports: [],
  templateUrl: './save-account.component.html',
  styleUrl: './save-account.component.css',
  providers: [CurrencyPipe],
})
export class SaveAccountComponent implements OnInit {
  icaAmount: number = 30000;
  avanzaAmount: number = 50000;
  totalAmount: number = 0;

  constructor(private currencyPipe: CurrencyPipe) {}

  @Output() totalAmountChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.icaAmount + this.avanzaAmount;
    this.totalAmountChange.emit(this.totalAmount);
  }

  getFormattedAmount(amount: number): string {
    const formattedAmount = this.currencyPipe.transform(amount, 'SEK', 'symbol', '1.0-0');
    return formattedAmount ? formattedAmount.replace('SEK', '').trim() : '0';
  }
    
}
