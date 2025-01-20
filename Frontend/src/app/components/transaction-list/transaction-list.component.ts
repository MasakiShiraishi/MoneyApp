import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionGroupSkeletonComponent } from '../skeleton/transaction-group-skeleton/transaction-group-skeleton.component';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TransactionGroupSkeletonComponent],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent implements OnInit {
  @Input() category: string = '';
  @Input() subCategories: string[] = [];
  transactions: Transaction[] = [];
  lastDate: string | null = null;
  isLoading = true;

  constructor(private transactionService: TransactionService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  setTimeouts(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1500);

  }

  fetchTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transactions = data
          .filter(
            (transaction) =>
              !this.category ||
              transaction.category === this.category ||
              this.subCategories.includes(transaction.category)
          )
          .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
         this.setTimeouts();
      },
      (error) => {
        console.error('Error fetching transactions:', error);
        this.setTimeouts();
      }
    );
  }

  shouldShowDate(currentDate: string, lastDate: string | null): boolean {
    if (currentDate !== lastDate) {
      this.lastDate = currentDate;
      return true;
    }
    return false;
  }
  formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('sv-SE', options);
  }
}
