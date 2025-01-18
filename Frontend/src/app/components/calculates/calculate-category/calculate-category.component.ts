import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';
import { ArrowToDetailComponent } from '../../arrows/arrow-to-detail/arrow-to-detail.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryTranslatePipe } from '../../../pipes/category-translate.pipe';

@Component({
  selector: 'app-calculate-category',
  imports: [ArrowToDetailComponent, RouterModule, CommonModule, CategoryTranslatePipe],
  templateUrl: './calculate-category.component.html',
  styleUrl: './calculate-category.component.css'
})
export class CalculateCategoryComponent implements OnInit {
  @Input() category: string = '';
  @Input() subCategories: string[] = [];
  transactions: Transaction[] = [];
  totalAmount: number = 0;
  
  constructor(private transactionService: TransactionService){} 

  ngOnInit(): void {
    this.fetchTransactions();
  }

  async fetchTransactions(): Promise<void> {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => {
        this.transactions = data;
        this.totalAmount = this.transactionService.calculateTotalAmount(this.transactions, this.subCategories);
      },
      (error: any) => console.error('Error fetching transactions:', error)
    );
  }

}
