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
    { link: "app-info", name: "Info", icon: "info" },
    { link: "app-ingredients", name: "Ingredients", icon: "restaurant_menu" },
    { link: 'app-bom', name: 'BOM', icon: 'build' },
    { link: 'app-label', name: 'Label', icon: 'label' },
    { link: 'app-quote-sheet', name: 'Quote Sheet', icon: 'description' },
    { link: 'app-component-pricing', name: 'Component Pricing', icon: 'monetization_on' },
    { link: 'app-nfg-sample-bom', name: 'NFG Sample BOM', icon: 'assignment' },
    { link: 'app-pre-pro-samples', name: 'Pre-Pro Samples', icon: 'science' },
    { link: 'app-coc', name: 'COC', icon: 'verified' },
    { link: 'app-moq-of-moq', name: 'MOQ of MOQ', icon: 'inventory' },
    { link: 'app-overage-cal', name: 'Overage Cal', icon: 'calculate' },
    { link: 'app-labor', name: 'Labor', icon: 'work' },
    { link: 'app-lab-testing', name: 'Lab Testing', icon: 'biotech' },
    { link: 'app-pds', name: 'PDS', icon: 'description' },
    { link: 'app-customer-approval', name: 'Customer Approval', icon: 'thumb_up' },
    { link: 'app-weighing-batch-records', name: 'Weighing Batch Records', icon: 'balance' },
    { link: 'app-mixing-batch-records', name: 'Mixing Batch Records', icon: 'blender' },
    { link: 'app-wet-granulation-batch-records', name: 'Wet Granulation Batch Records', icon: 'water' },
    { link: 'app-drying-granulation-batch-records', name: 'Drying Granulation Batch Records', icon: 'wb_sunny' },
    { link: 'app-encapsulation-batch-records', name: 'Encapsulation Batch Records', icon: 'grain' },
    { link: 'app-bottling-batch-records', name: 'Bottling Batch Records', icon: 'local_drink' },
    { link: 'app-final-testing-qc-sign-off', name: 'Final Testing QC Sign Off', icon: 'done' },
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
