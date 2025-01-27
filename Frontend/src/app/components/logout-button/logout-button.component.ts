import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-button',
  imports: [CommonModule],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.css',
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login-register']);
  }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
