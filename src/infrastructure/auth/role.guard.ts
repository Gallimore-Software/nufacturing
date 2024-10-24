import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.userRole.pipe(
      map((role) => {
        if (role === 'Admin') {
          return true; // Allow access if Admin
        } else {
          this.router.navigate(['/unauthorized']);
          return false; // Redirect otherwise
        }
      })
    );
  }
}
