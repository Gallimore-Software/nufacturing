import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  canActivate(): Observable<boolean> | boolean {
    const authData = localStorage.getItem('authData');

    if (authData) {
      const { token } = JSON.parse(authData);

      // If token exists and is not expired, allow access
      if (token && !this.jwtHelper.isTokenExpired(token)) {
        return true; // User is authenticated
      }

      // If token exists but is expired, try to refresh the token
      if (token && this.jwtHelper.isTokenExpired(token)) {
        return this.authService.refreshToken().pipe(
          switchMap((newToken) => {
            if (newToken) {
              return of(true); // Token successfully refreshed, allow access
            } else {
              this.router.navigate(['/login']);
              return of(false); // Token refresh failed, redirect to login
            }
          }),
          catchError(() => {
            this.router.navigate(['/login']);
            return of(false); // Error during token refresh, redirect to login
          })
        );
      }
    }

    // If no token, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
