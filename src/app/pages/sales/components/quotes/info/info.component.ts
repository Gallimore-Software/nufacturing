import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  dock: boolean = false;

  toggleDock() {
    this.dock = !this.dock;
  }
}
