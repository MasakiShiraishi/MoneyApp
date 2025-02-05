import { Component } from '@angular/core';
import { ArrowToHomeComponent } from '../arrows/arrow-to-home/arrow-to-home.component';
import { AccountInfoComponent } from "./account-info/account-info.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ArrowToHomeComponent, AccountInfoComponent, MenuComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
