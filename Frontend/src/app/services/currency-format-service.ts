import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyFormatService {
  constructor(private currencyPipe: CurrencyPipe) {}

  getFormattedAmount(amount: number): string {
    const formatteAmount = this.currencyPipe.transform(
      amount,
      'SEK',
      'symbol',
      '1.0-0'
    );
    return formatteAmount ? formatteAmount.replace('SEK', '').replace(',',' ').trim() : '0';
  }
  getFormattedNegativeAmount(amount: number): string {
    const negativeAmount = -amount;
    const formatteAmount = this.currencyPipe.transform(
      negativeAmount,
      'SEK',
      'symbol',
      '1.0-0'
    );
    return formatteAmount ? formatteAmount.replace('SEK', '').replace(',',' ').trim() : '0';
  }
}
