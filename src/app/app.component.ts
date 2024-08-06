import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './components/auth/auth.service';
import { Apollo, gql } from 'apollo-angular';
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
  private querySubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private apollo: Apollo,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.checkLoginStatus();
    if (this.isLoggedIn == true) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

  private checkLoginStatus(): void {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      this.isLoggedIn = true;
    } else {
      this.authService.isLoggedIn.subscribe((loginStatus: boolean) => {
        this.isLoggedIn = loginStatus;
      });
    }
  }
}
