import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CashbookComponent } from './components/cashbook/cashbook.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AccommodationTransactionsComponent } from './components/cashbook-transactions/accommodation-transactions/accommodation-transactions.component';
import { ClotheTransactionsComponent } from './components/cashbook-transactions/clothe-transactions/clothe-transactions.component';
import { HobbyTransactionsComponent } from './components/cashbook-transactions/hobby-transactions/hobby-transactions.component';
import { TransportTransactionsComponent } from './components/cashbook-transactions/transport-transactions/transport-transactions.component';
import { FoodTransactionsComponent } from './components/cashbook-transactions/food-transactions/food-transactions.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
          {path:'login-register', component: LoginRegisterComponent},
          {path:'', component: HomeComponent, canActivate: [AuthGuard]},
          {path:'transaction', component: TransactionComponent, canActivate: [AuthGuard]},
          {path:'cashbook', component: CashbookComponent, canActivate: [AuthGuard]},
          {path:'account', component: AccountComponent, canActivate: [AuthGuard]},
          {path:'transaction-list', component: TransactionListComponent, canActivate: [AuthGuard]},
          {path:'cashbook/foods',component: FoodTransactionsComponent, canActivate: [AuthGuard]},
          {path:'cashbook/accommodation',component: AccommodationTransactionsComponent, canActivate: [AuthGuard]},
          {path:'cashbook/clothes',component: ClotheTransactionsComponent, canActivate: [AuthGuard]},
          {path:'cashbook/hobby', component: HobbyTransactionsComponent, canActivate: [AuthGuard]},
          {path:'cashbook/transport', component: TransportTransactionsComponent, canActivate: [AuthGuard]},
          {path: '**', redirectTo: '' }
          
];