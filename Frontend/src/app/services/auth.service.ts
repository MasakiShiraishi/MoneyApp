import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:5234/api/Auth';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/login`,
      {
        username,
        password,
      },
      { responseType: 'text' as 'json' }
    );
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/register`, {
      username,
      password,
      email,
    });
  }

  public isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getToken();
      if (!token) {
        return false;
      }
      return true;
    }
    return false;
  }

  public getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  public logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }
  public scheduleLogout(minutes: number): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.logout();
        window.location.reload();
      }, minutes * 60 * 1000);
    }
  }
}
