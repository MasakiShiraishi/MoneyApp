import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    TransactionComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
