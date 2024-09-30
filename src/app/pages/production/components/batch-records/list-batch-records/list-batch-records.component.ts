import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BatchRecordsService } from 'src/app/services/batch-records.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { BatchDetailDialogComponent } from '../batch-detail-dialog/batch-detail-dialog.component';
import { CreateBatchRecordsComponent } from '../create-batch-records/create-batch-records.component';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

export interface BatchRecord {
  _id: string;
  batchNumber: string;
  productSKU: string;
  formula: string;
  productionDate: Date;
  expirationDate: Date;
  productionLine: string;
  shift: string;
  quantityProduced: number;
  status: string;
  operator: string;
  qualityChecks: Array<{
    checkName: string;
    result: string;
    checkedBy: string;
    checkedAt: Date;
  }>;
}

@Component({
  selector: 'app-list-batch-records',
  templateUrl: './list-batch-records.component.html',
  styleUrls: ['./list-batch-records.component.scss'],
})
export class ListBatchRecordsComponent implements OnInit {
  batchRecords: BatchRecord[] = [];
  filteredBatchRecords: BatchRecord[] = [];
  isAdmin: boolean = false;
  isManager: boolean = false;

  constructor(
    private batchRecordsService: BatchRecordsService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.refreshBatchRecords();

    this.authService.userRole.subscribe((role: string | null) => {
      this.isAdmin = role === 'admin';
      this.isManager = role === 'manager';
    });
  }

  refreshBatchRecords() {
    this.batchRecordsService
      .getBatchRecords()
      .subscribe((data: BatchRecord[]) => {
        this.batchRecords = data;
        this.filteredBatchRecords = data;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredBatchRecords = this.batchRecords.filter(
      (batch) =>
        batch.batchNumber.toLowerCase().includes(filterValue) ||
        batch.productSKU.toLowerCase().includes(filterValue),
    );
  }

  viewBatchDetails(batch: BatchRecord) {
    this.dialog.open(BatchDetailDialogComponent, {
      width: '600px',
      data: batch,
    });
  }

  createBatch() {
    if (!this.isAdmin) return; // Only admin can create a batch
    this.dialog
      .open(CreateBatchRecordsComponent, {
        width: '600px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.refreshBatchRecords(); // Refresh list after creation
        }
      });
  }

  editBatch(batch: BatchRecord) {
    if (this.isAdmin) {
      this.dialog
        .open(CreateBatchRecordsComponent, {
          width: '600px',
          data: { batch },
        })
        .afterClosed()
        .subscribe(() => {
          this.refreshBatchRecords();
        });
    }
  }

  assignDataToBatch(batch: BatchRecord) {
    if (this.isAdmin || this.isManager) {
      this.dialog
        .open(BatchDetailDialogComponent, {
          width: '600px',
          data: { batch, assignable: true }, // Assignable flag for data editing
        })
        .afterClosed()
        .subscribe(() => {
          this.refreshBatchRecords();
        });
    }
  }

  deleteBatch(batch: BatchRecord) {
    if (this.isAdmin) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: {
          message: `Are you sure you want to delete the Batch ${batch.batchNumber}?`,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.batchRecordsService
            .deleteBatchRecord(batch._id)
            .subscribe(() => {
              this.refreshBatchRecords();
            });
        }
      });
    }
  }
}
