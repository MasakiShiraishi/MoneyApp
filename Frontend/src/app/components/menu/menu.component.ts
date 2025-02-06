import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, LogoutButtonComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isMenuOpen = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(event: Event) {
    if (this.isMenuOpen && event.target instanceof Element && !event.target.closest('nav')) {
      this.isMenuOpen = false;
    }
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.closeMenu(event);
  }
  
  


}
