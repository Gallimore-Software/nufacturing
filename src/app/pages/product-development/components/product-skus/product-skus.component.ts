import { Component } from '@angular/core';

@Component({
  selector: 'app-product-skus',
  templateUrl: './product-skus.component.html',
  styleUrls: ['./product-skus.component.scss'],
})
export class ProductSkusComponent {
  dock: boolean = false;

  toggleDock() {
    this.dock = !this.dock;
  }
}
