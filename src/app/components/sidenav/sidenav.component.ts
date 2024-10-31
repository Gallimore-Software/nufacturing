import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface SubChildLink {
  link: string;
  name: string;
  icon: string;
}

interface ChildLink {
  link: string;
  name: string;
  icon: string;
  subchildren?: SubChildLink[];
}

interface RouteLink {
  link: string;
  name: string;
  icon: string;
  children: ChildLink[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() isExpanded: boolean = true;
  @Output() toggleMenu = new EventEmitter<void>();
  activeMenu: string | null = null;
  activeSubMenu: string | null = null;

  public routeLinks: RouteLink[] = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard', children: [] },
    {
      link: 'sales',
      name: 'Sales',
      icon: 'groups',
      children: [
        { link: 'sales/customers', name: 'Customers', icon: 'face' },
        { link: 'sales/orders', name: 'Orders', icon: 'shopping_cart' },
        {
          link: 'sales/quotes',
          name: 'Quotes',
          icon: 'attach_money',
          subchildren: [
            { link: 'sales/quotes/info', name: 'Info', icon: 'info' },
            {
              link: 'sales/quotes/ingredients',
              name: 'Ingredients',
              icon: 'local_grocery_store',
            },
            { link: 'sales/quotes/bom', name: 'BOM', icon: 'receipt_long' },
          ],
        },
      ],
    },
    {
      link: 'inventory',
      name: 'Inventory',
      icon: 'inventory',
      children: [
        { link: 'inventory/dashboard', name: 'Overview', icon: 'dashboard' },
        {
          link: 'inventory/raw-materials',
          name: 'Raw Materials',
          icon: 'inventory_2',
        },
        {
          link: 'inventory/finished-goods',
          name: 'Finished Goods',
          icon: 'check_circle',
        },
        {
          link: 'inventory/product-components',
          name: 'Product Components',
          icon: 'category',
        },
        {
          link: 'inventory/works-in-progress',
          name: 'Work in Progress',
          icon: 'build',
        },
      ],
    },
    {
      link: 'production',
      name: 'Production',
      icon: 'receipt_long',
      children: [
        {
          link: 'production/batch-records',
          name: 'Batch Records',
          icon: 'inventory_2',
        },
        {
          link: 'production/shifting-records',
          name: 'Shifting Records',
          icon: 'swap_horiz',
        },
        // Add more production links as necessary
      ],
    },
    { link: 'logout', name: 'Logout', icon: 'logout', children: [] },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.checkActiveRoute());

    this.checkActiveRoute(); // Check on initial load
  }

  checkActiveRoute() {
    const url = this.router.url;
    this.routeLinks.forEach((route) => {
      if (route.children.length) {
        route.children.forEach((child) => {
          if (url.includes(child.link)) {
            this.activeMenu = route.name; // Set the parent menu as active
            if (child.subchildren) {
              child.subchildren.forEach((subchild) => {
                if (url.includes(subchild.link)) {
                  this.activeSubMenu = child.name; // Set the subchild menu as active
                }
              });
            }
          }
        });
      }
    });
  }

  toggle() {
    this.toggleMenu.emit();
    this.isExpanded = !this.isExpanded; // Toggle expansion state
  }

  toggleSubMenu(menuName: string | null) {
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
  }

  toggleSubChildMenu(subMenuName: string | null) {
    this.activeSubMenu =
      this.activeSubMenu === subMenuName ? null : subMenuName;
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
    this.toggleSubMenu(null); // Collapse submenu on navigate
    this.toggleSubChildMenu(null); // Collapse subchild menu on navigate
  }

  getSubMenuItems(): ChildLink[] {
    const route = this.routeLinks.find(
      (route) => route.name === this.activeMenu
    );
    return route ? route.children : [];
  }

  getSubChildMenuItems(parentName: string): SubChildLink[] {
    const parentRoute = this.routeLinks.find(
      (route) => route.name === this.activeMenu
    );
    if (parentRoute && parentRoute.children) {
      const childRoute = parentRoute.children.find(
        (child) => child.name === parentName
      );
      return childRoute?.subchildren || [];
    }
    return [];
  }
}
