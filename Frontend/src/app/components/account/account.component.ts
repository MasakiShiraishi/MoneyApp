import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrows/arrow-to-home/arrow-to-home.component';
import { AccountInfoComponent } from "./account-info/account-info.component";
import { LogoutButtonComponent } from "../logout-button/logout-button.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ArrowToHomeComponent, AccountInfoComponent, LogoutButtonComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
