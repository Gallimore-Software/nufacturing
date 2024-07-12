import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() isExpanded: boolean = true;
  @Output() toggleMenu = new EventEmitter<void>();

  constructor(private router: Router) {}

  toggle() {
    this.toggleMenu.emit();
  }

  public routeLinks = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard' },
    { link: 'sales', name: 'Sales', icon: 'groups' },
    { link: 'purchasing', name: 'Purchasing', icon: 'request_quote' },
    { link: 'production', name: 'Production', icon: 'receipt_long' },
    {
      link: 'product_development',
      name: 'Product Development',
      icon: 'inventory_2',
    },
    { link: 'quality', name: 'Quality', icon: 'lab_panel' },
    { link: 'human_resources', name: 'Human Resources', icon: 'school' },
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
