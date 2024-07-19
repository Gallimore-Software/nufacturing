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
  activeMenu: string | null = null;

  constructor(private router: Router) {}

  public routeLinks = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard', children: [] },
    { 
      link: 'sales', 
      name: 'Sales', 
      icon: 'groups', 
      children: [
        { link: 'sales/customers', name: 'Customers', icon: 'face' },
        { link: 'sales/orders', name: 'Orders', icon: 'shopping_cart' },
        { link: 'sales/quotes', name: 'Quotes', icon: 'attach_money' }
      ]
    },
    { link: 'inventory', name: 'Inventory', icon: 'inventory', children: [] },
    { link: 'receiving', name: 'Receiving', icon: 'call_received', children: [] },
    { link: 'vendors', name: 'Vendors', icon: 'diversity_2', children: [] },
    { link: 'production', name: 'Production', icon: 'receipt_long', children: [
      { link: 'production/batch-records', name: 'Batch Records', icon: 'inventory_2' },
      { link: 'production/shifting-records', name: 'Shifting Records', icon: 'swap_horiz' },
      { link: 'production/depositor-records', name: 'Depositor Records', icon: 'payments' },
      { link: 'production/packaging-records', name: 'Packaging Records', icon: 'inventory' },
      { link: 'production/mixing-records', name: 'Mixing Records', icon: 'science' },
      { link: 'production/weighing-records', name: 'Weighing Records', icon: 'scale' },
      { link: 'production/bottling-records', name: 'Bottling Records', icon: 'local_drink' },
      { link: 'production/encapsulation-records', name: 'Encapsulation Records', icon: 'spa' },
      { link: 'production/master-manufacturing-records', name: 'Master Manifacturing Records', icon: 'factory' },
      { link: 'production/assets-and-machines', name: 'Assets and Machines', icon: 'build' },
      { link: 'production/production-planning', name: 'Production Planning', icon: 'event' },
      { link: 'production/reporting', name: 'Reporting', icon: 'summarize' },
    ] },
    { link: 'product-development', name: 'Product Development', icon: 'inventory_2', children: [
      { link: 'product-development/formulas', name: 'Formulas', icon: 'science' },
      { link: 'product-development/product-skus', name: 'Product SKUs', icon: 'label_important' },
      { link: 'product-development/product-types', name: 'Product Types', icon: 'merge_type' },
    ] },
    { link: 'quality', name: 'Quality', icon: 'precision_manufacturing', children: [
      {link:'quality/fda-audits', name: 'Fda Audits', icon: 'receipt_long'},
      {link:'quality/quality-audits', name: 'Quality Audits', icon:'history_edu'},
    ] },
    { link: 'human-resources', name: 'Human Resources', icon: 'school', children: [
      {link:'human-resources/training', name: 'Training', icon:'model_training'},
      {link:'human-resources/users', name: 'Users', icon:'person'},
    ] },
    { link: 'logout', name: 'Logout', icon: 'logout', children: [] },
  ];

  toggle() {
    this.toggleMenu.emit();
    this.activeMenu = null;  // Reset on toggle for consistency
  }

  toggleSubMenu(menuName: string | null) {
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
    this.toggleSubMenu(null);  // Collapse submenu on navigate
  }

  getSubMenuItems(): any[] {
    const route = this.routeLinks.find(route => route.name === this.activeMenu);
    return route ? route.children : [];
  }
}


