import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CashbookComponent } from './components/cashbook/cashbook.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionService } from './services/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    TransactionComponent,
    CashbookComponent,
    AccountComponent,
    TransactionListComponent
  ],
  providers: [TransactionService],
  bootstrap: [],
})
export class AppModule {}
