import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:5234/api/Transaction';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  getTransaction(id: string): Observable<Transaction>{
   return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }

  calculateTotalAmount(transactions: Transaction[], categories: string[]): number {
    const filteredTransactions = transactions.filter(transaction => categories.includes(transaction.category));
    return filteredTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  }
}
