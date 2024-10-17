import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Nufacturing';
  route = 'quotes';
  isLoggedIn: boolean = false;
  private loginStatusSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginStatusSubscription = this.authService.isLoggedIn.subscribe(
      (loginStatus: boolean) => {
        this.isLoggedIn = true; // Set to true manually for development
        this.router.navigate(['/dashboard']);
      },
    );
  }

  ngOnDestroy(): void {
    if (this.loginStatusSubscription) {
      this.loginStatusSubscription.unsubscribe();
    }
  }
}
