import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-records',
  templateUrl: './batch-records.component.html',
  styleUrls: ['./batch-records.component.scss'],
})
export class BatchRecordsComponent {
  dock: boolean = false;

  toggleDock() {
    this.dock = !this.dock;
  }
}
