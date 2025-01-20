import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CashbookComponent } from './components/cashbook/cashbook.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { FoodComponent } from './components/food/food.component';
import { AccommodationTransactionsComponent } from './components/cashbook-transactions/accommodation-transactions/accommodation-transactions.component';
import { ClotheTransactionsComponent } from './components/cashbook-transactions/clothe-transactions/clothe-transactions.component';
import { HobbyTransactionsComponent } from './components/cashbook-transactions/hobby-transactions/hobby-transactions.component';
import { TransportTransactionsComponent } from './components/cashbook-transactions/transport-transactions/transport-transactions.component';

export const routes: Routes = [
          {path:'', component: HomeComponent},
          {path:'transaction', component: TransactionComponent},
          {path:'cashbook', component: CashbookComponent},
          {path:'account', component: AccountComponent},
          {path:'transaction-list', component: TransactionListComponent},
          {path:'cashbook/foods',component: FoodComponent},
          {path:'cashbook/accommodation',component: AccommodationTransactionsComponent},
          {path:'cashbook/clothes',component: ClotheTransactionsComponent},
          {path:'cashbook/hobby', component: HobbyTransactionsComponent},
          {path:'cashbook/transport', component: TransportTransactionsComponent},
];