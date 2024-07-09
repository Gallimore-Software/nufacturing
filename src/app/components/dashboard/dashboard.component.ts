import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isExpanded = true;
  
  @Input() route: string = "";

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  handleNavigation(route: string) {
    this.route = route;
  }
}
