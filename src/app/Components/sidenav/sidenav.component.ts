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
    { link: 'inventory', name: "Inventory", icon: 'inventory_2' },
    { link: 'customers', name: "Customers", icon: 'groups' },
    { link: 'quotes', name: "Quotes", icon: 'request_quote'},
    { link: 'orders', name: "Orders", icon: 'receipt_long'},
    { link: 'assets', name: "Assets", icon: 'balance' },
    { link: 'vendors', name: "Vendors", icon: 'partner_exchange'},
    { link: 'purchasing', name: "Purchasing", icon: 'storefront'},
    { link: 'receiving', name: "Receiving", icon: 'package_2'},
    { link: 'training', name: "Training", icon: 'school'},
    { link: 'production', name: "Production", icon: 'conveyor_belt'},
    { link: 'quality', name: "Quality", icon: 'lab_panel'},
    { link: 'reporting', name: "Reporting", icon: 'monitoring'},
    { link: 'accounting', name: "Accounting", icon: 'account_balance' },
    { link: 'admin', name: "Admin", icon: 'admin_panel_settings' },
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
