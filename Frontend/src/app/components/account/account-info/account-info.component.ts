import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info',
  imports: [CommonModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent {
  accounts = [
    { name: 'CSN', date: '2024-04-23' },
    { name: 'ICA bank', date: '2024-04-23' },
    { name: 'American Express', date: '2024-04-23' }
  ];
}
