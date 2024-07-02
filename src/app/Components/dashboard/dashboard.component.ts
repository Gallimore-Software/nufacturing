import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isExpanded = true;
  
  selectedRoute = 'app-info';

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  handleNavigation(route: string) {
    this.selectedRoute = route;
  }
}
