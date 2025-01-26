import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-register',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  error: string = '';
  isLogin: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  handleSubmit() {
    if (this.isLogin) {
      this.authService.login(this.username, this.password).subscribe(
        (token: string) => {
          localStorage.setItem('token', token);
          this.authService.scheduleLogout(15);
          this.router.navigate(['/']);
        },
        (error) => {
          this.error = 'Ogiltigt användarnamn eller lösenord';
        }
      );
    } else {
      this.authService
        .register(this.username, this.password, this.email)
        .subscribe(
          (response) => {
            this.isLogin = true;
          },
          (error) => {
            this.error = 'Ogiltigt användarnamn, lösenord eller e-postadress';
          }
        );
    }
  }
  toggleForm() {
    this.isLogin = !this.isLogin;
    this.error = '';
  }
}
