import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:5234/api/Transaction';

  private incomeTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private costTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  incomeTotal$ = this.incomeTotal.asObservable();
  costTotal$ = this.costTotal.asObservable();

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

  setIncomeTotal(total: number): void {
    this.incomeTotal.next(total);
  }
  setCostTotal(total: number): void {   
    this.costTotal.next(total);
  }
}
