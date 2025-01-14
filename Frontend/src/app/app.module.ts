import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CashbookComponent } from './components/cashbook/cashbook.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    TransactionComponent,
    CashbookComponent,
    AccountComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
