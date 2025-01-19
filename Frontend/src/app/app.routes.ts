import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CashbookComponent } from './components/cashbook/cashbook.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { FoodComponent } from './components/food/food.component';
import { AccommodationTransactionsComponent } from './components/cashbook-transactions/accommodation-transactions/accommodation-transactions.component';
import { ClotheTransactionsComponent } from './components/cashbook-transactions/clothe-transactions/clothe-transactions.component';

export const routes: Routes = [
          {path:'', component: HomeComponent},
          {path:'transaction', component: TransactionComponent},
          {path:'cashbook', component: CashbookComponent},
          {path:'account', component: AccountComponent},
          {path:'transaction-list', component: TransactionListComponent},
          {path:'foods',component: FoodComponent},
          {path:'accommodation',component: AccommodationTransactionsComponent},
          {path:'clothes',component: ClotheTransactionsComponent},
];