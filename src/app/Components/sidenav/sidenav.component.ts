import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() isExpanded: boolean = true;
  @Output() toggleMenu = new EventEmitter<void>();

  constructor(private router: Router) {}

  toggle() {
    this.toggleMenu.emit();
  }

  public routeLinks = [
    { link: 'accounting', name: "Accounting", icon: 'monetization_on' },
    { link: 'admin', name: "Admin", icon: 'admin' },
    { link: 'assets', name: "Assets", icon: 'balance' },
    { link: 'customers', name: "Customers", icon: 'account_circle' },
    { link: 'inventory', name: "Inventory", icon: '' },
    { link: 'orders', name: "Orders", icon: ''},
    { link: 'production', name: "Production", icon: ''},
    { link: 'purchasing', name: "Purchasing", icon: ''},
    { link: 'quality', name: "Quality", icon: ''},
    { link: 'quotes', name: "Quotes", icon: ''},
    { link: 'receiving', name: "Receiving", icon: ''},
    { link: 'reporting', name: "Reporting", icon: ''},
    { link: 'sales', name: "Sales", icon: ''},
    { link: 'training', name: "Training", icon: ''},
    { link: 'vendors', name: "Vendors", icon: ''},
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
