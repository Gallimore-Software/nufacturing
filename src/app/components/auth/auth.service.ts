import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environment/environment';

interface AuthResponse {
  token: string;
  user: {
    id: string; // Add ID field
    email: string;
    role: string;
    // Add other user fields as needed
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.checkToken());
  private userRoleSubject = new BehaviorSubject<string | null>(
    this.getUserRoleFromStorage(),
  );

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
  ) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const loginUrl = `${environment.apiUrl}/users/login`;

    return this.http.post<AuthResponse>(loginUrl, { email, password }).pipe(
      tap((response: AuthResponse) => {
        // Store authentication data in local storage
        localStorage.setItem('authData', JSON.stringify(response));
        this.isAuthenticated.next(true);
        this.userRoleSubject.next(response.user.role); // Update user role
        this.router.navigate(['/dashboard']);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login failed', error);
        return throwError(error);
      }),
    );
  }

  logout() {
    localStorage.removeItem('authData');
    this.isAuthenticated.next(false);
    this.userRoleSubject.next(null); // Clear the user role
    this.router.navigate(['/login']);
  }

  checkToken(): boolean {
    const authData = localStorage.getItem('authData');
    if (!authData) {
      return false;
    }

    const { token } = JSON.parse(authData);

    return !this.jwtHelper.isTokenExpired(token);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  get userRole(): Observable<string | null> {
    return this.userRoleSubject.asObservable();
  }

  private getUserRoleFromStorage(): string | null {
    const authData = localStorage.getItem('authData');
    if (!authData) {
      return null;
    }

    const { user } = JSON.parse(authData);
    return user.role;
  }

  getCurrentUserId(): string | null {
    const authData = localStorage.getItem('authData');
    if (!authData) {
      return null;
    }

    const { user } = JSON.parse(authData);
    return user.id; // Return the user's ID
  }
}
