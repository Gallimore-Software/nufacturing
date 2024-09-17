import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BatchRecord } from '../list-batch-records/list-batch-records.component';

@Component({
  selector: 'app-batch-detail-dialog',
  templateUrl: './batch-detail-dialog.component.html',
  styleUrls: ['./batch-detail-dialog.component.scss'],
})
export class BatchDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: BatchRecord) {}
}
