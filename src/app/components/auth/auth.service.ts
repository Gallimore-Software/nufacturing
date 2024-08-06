import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(email: string, password: string): boolean {
    // Example authentication logic
    if (email === 'admin@admin.com' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.isAuthenticated.next(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isAuthenticated.next(false);
  }

  get isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }
}
