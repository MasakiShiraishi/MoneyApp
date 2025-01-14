import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CashbookComponent } from './components/cashbook/cashbook.component';

export const routes: Routes = [
          {path:'', component: HomeComponent},
          {path:'transaction', component: TransactionComponent},
          {path:'cashbook', component: CashbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
