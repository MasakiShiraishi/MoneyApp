import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrows/arrow-to-home/arrow-to-home.component';
import { AccountInfoComponent } from "./account-info/account-info.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ArrowToHomeComponent, AccountInfoComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
