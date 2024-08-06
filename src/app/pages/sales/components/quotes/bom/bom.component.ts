import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.scss'],
})
export class BomComponent {
  dock: boolean = false;

  constructor(private router: Router) {}

  toggleDock() {
    this.dock = !this.dock;
  }
}
