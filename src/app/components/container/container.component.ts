import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  isExpanded = true;

  @Input() route: string = '';

  toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  handleNavigation(route: string) {
    this.route = route;
  }
}
