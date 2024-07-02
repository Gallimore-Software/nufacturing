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
    { link: 'info', name: 'Info', icon: 'info' },
    { link: 'ingredients', name: 'Ingredients', icon: 'restaurant_menu' },
    { link: 'bom', name: 'BOM', icon: 'build' },
    { link: 'label', name: 'Label', icon: 'label' },
    { link: 'quote-sheet', name: 'Quote Sheet', icon: 'description' },
    { link: 'component-pricing', name: 'Component Pricing', icon: 'monetization_on' },
    { link: 'nfg-sample-bom', name: 'NFG Sample BOM', icon: 'assignment' },
    { link: 'pre-pro-samples', name: 'Pre-Pro Samples', icon: 'science' },
    { link: 'coc', name: 'COC', icon: 'verified' },
    { link: 'moq-of-moq', name: 'MOQ of MOQ', icon: 'inventory' },
    { link: 'overage-cal', name: 'Overage Cal', icon: 'calculate' },
    { link: 'labor', name: 'Labor', icon: 'work' },
    { link: 'lab-testing', name: 'Lab Testing', icon: 'biotech' },
    { link: 'pds', name: 'PDS', icon: 'description' },
    { link: 'customer-approval', name: 'Customer Approval', icon: 'thumb_up' },
    { link: 'weighing-batch-records', name: 'Weighing Batch Records', icon: 'balance' },
    { link: 'mixing-batch-records', name: 'Mixing Batch Records', icon: 'blender' },
    { link: 'wet-granulation-batch-records', name: 'Wet Granulation Batch Records', icon: 'water' },
    { link: 'drying-granulation-batch-records', name: 'Drying Granulation Batch Records', icon: 'wb_sunny' },
    { link: 'encapsulation-batch-records', name: 'Encapsulation Batch Records', icon: 'grain' },
    { link: 'bottling-batch-records', name: 'Bottling Batch Records', icon: 'local_drink' },
    { link: 'final-testing-qc-sign-off', name: 'Final Testing QC Sign Off', icon: 'done' },
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
