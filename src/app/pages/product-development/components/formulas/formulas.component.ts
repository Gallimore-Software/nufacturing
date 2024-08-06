import { Component } from '@angular/core';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.scss'],
})
export class FormulasComponent {
  dock: boolean = false;

  toggleDock() {
    this.dock = !this.dock;
  }
}
