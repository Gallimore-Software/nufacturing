import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.checkToken());
  private userRoleSubject = new BehaviorSubject<string | null>(
    this.getUserRoleFromStorage()
  );

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {
    // Initialize login state based on token validity
    this.isAuthenticated.next(this.checkToken());

    // Initialize user role from storage
    const role = this.getUserRoleFromStorage();
    this.userRoleSubject.next(role);
  }

  // Login method
  login(email: string, password: string): Observable<AuthResponse> {
    const loginUrl = `${environment.apiUrl}/auth/login`;
    return this.http.post<AuthResponse>(loginUrl, { email, password }).pipe(
      tap((response) => this.handleAuthSuccess(response)),
      catchError(this.handleError('Login failed, please try again.'))
    );
  }

  // Register method
  registerUser(registerData: {
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
  }): Observable<AuthResponse> {
    const registerUrl = `${environment.apiUrl}/auth/register`;
    return this.http.post<AuthResponse>(registerUrl, registerData).pipe(
      tap((response) => this.handleAuthSuccess(response)),
      catchError(this.handleError('Registration failed, please try again.'))
    );
  }

  // Logout method
  logout() {
    localStorage.removeItem('authData');
    this.isAuthenticated.next(false);
    this.userRoleSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Check if token exists in local storage and is valid (not expired and properly formatted)
  private checkToken(): boolean {
    try {
      const authData = localStorage.getItem('authData');

      // Check if authData exists and is a valid JSON
      if (!authData) return false;

      const { token } = JSON.parse(authData);

      // Check if the token exists and is a string
      if (typeof token !== 'string') {
        console.warn('Token is not a valid string:', token);
        return false;
      }

      // Check if the token is not expired
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      console.warn('Error checking token validity:', error);
      return false;
    }
  }

  // Helper method to check if the token is valid (not expired and properly formatted)
  private isValidToken(token: string): boolean {
    try {
      // Validate the token's format and check if it's expired
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      console.warn('Invalid token detected:', error); // Handle invalid token errors
      return false;
    }
  }

  // Observable for login status
  get isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  // Observable for user role
  get userRole(): Observable<string | null> {
    return this.userRoleSubject.asObservable();
  }

  // Get the current user ID from local storage
  getCurrentUserId(): string | null {
    const authData = localStorage.getItem('authData');
    return authData ? JSON.parse(authData).user.id : null;
  }

  // Refresh token logic
  refreshToken(): Observable<string | null> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return of(null);

    return this.http
      .post<{
        token: string;
      }>(`${environment.apiUrl}/auth/refresh`, { refreshToken })
      .pipe(
        map((response) => {
          this.storeToken(response.token);
          return response.token;
        }),
        catchError(() => {
          this.isAuthenticated.next(false);
          return of(null);
        })
      );
  }

  // Helper to handle successful authentication
  private handleAuthSuccess(response: AuthResponse): void {
    if (response && response.token) {
      localStorage.setItem('authData', JSON.stringify(response));
      this.isAuthenticated.next(true);
      this.userRoleSubject.next(response.user.role);
      this.router.navigate(['/dashboard']);
    } else {
      console.warn('No token found in response:', response);
    }
  }

  // Helper to handle errors
  private handleError(errorMessage: string) {
    return (error: HttpErrorResponse) => {
      console.error(errorMessage, error);
      return throwError(() => new Error(errorMessage));
    };
  }

  // Helper to store token
  private storeToken(token: string) {
    const authData = localStorage.getItem('authData');
    if (authData) {
      const updatedAuthData = { ...JSON.parse(authData), token };
      localStorage.setItem('authData', JSON.stringify(updatedAuthData));
    }
    this.isAuthenticated.next(true);
  }

  // Get role from local storage
  private getUserRoleFromStorage(): string | null {
    const authData = localStorage.getItem('authData');

    if (!authData) {
      return null;
    }

    try {
      const { user } = JSON.parse(authData);

      // Ensure user and role exist before returning
      return user && user.role ? user.role : null;
    } catch (error) {
      console.warn('Error parsing authData from local storage:', error);
      return null;
    }
  }
}
