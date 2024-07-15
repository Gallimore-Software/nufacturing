import { Component } from '@angular/core';
import { AuthService } from './Components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nufacturing';
  route = "quotes";
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((loginStatus) => {
      this.isLoggedIn = loginStatus;
    });
  }
}
