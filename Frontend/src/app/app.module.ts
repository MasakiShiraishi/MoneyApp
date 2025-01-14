import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [],
  imports: [AppRoutingModule, AppComponent, HomeComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
