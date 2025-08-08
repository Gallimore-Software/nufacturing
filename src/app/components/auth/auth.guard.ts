import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  canActivate(): boolean {
    const authData = localStorage.getItem('authData');
    if (authData) {
      const { accessToken } = JSON.parse(authData);
      // Check if the token is valid
      if (accessToken && !this.jwtHelper.isTokenExpired(accessToken)) {
        console.log('Granted permission by Auth Guard');
        return true;
      }
    }
    // If token is invalid or not present, redirect to login
    this.router.navigate(['/login']);
    console.log('Denied permission by Auth Guard');
    return false;
  }
}
