/* eslint-disable no-undef */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

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

    // Check if authData is present
    if (authData) {
      try {
        const { accessToken } = JSON.parse(authData);

        // Ensure access token is a valid string before proceeding
        if (typeof accessToken !== 'string') {
          this.router.navigate(['/login']);
          return false;
        }

        // If access token exists and is valid, allow access
        if (accessToken && !this.jwtHelper.isTokenExpired(accessToken)) {
          return true; // User is authenticated
        }

        // If access token exists but is expired, attempt to refresh it
        if (accessToken && this.jwtHelper.isTokenExpired(accessToken)) {
          return this.authService.refreshToken().pipe(
            switchMap((newToken) => {
              if (newToken) {
                return of(true); // Access token successfully refreshed, allow access
              } else {
                this.router.navigate(['/login']);
                return of(false); // Access token refresh failed, redirect to login
              }
            }),
            catchError(() => {
              this.router.navigate(['/login']);
              return of(false); // Error during access token refresh, redirect to login
            })
          );
        }
      } catch (error) {
        console.error(
          'Error parsing authData or checking access token:',
          error
        );
        this.router.navigate(['/login']);
        return false;
      }
    }

    // If no access token, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
