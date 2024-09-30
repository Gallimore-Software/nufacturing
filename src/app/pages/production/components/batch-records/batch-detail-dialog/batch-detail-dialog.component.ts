import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog'; // Import MatDialog for opening dialogs
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component'; // Import the confirm dialog
import { BatchRecord } from '../list-batch-records/list-batch-records.component';
import { BatchRecordsService } from 'src/app/services/batch-records.service';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-batch-detail-dialog',
  templateUrl: './batch-detail-dialog.component.html',
  styleUrls: ['./batch-detail-dialog.component.scss'],
})
export class BatchDetailDialogComponent implements OnInit {
  batchForm: FormGroup;
  operators: Array<{ _id: string; username: string }> = [];
  isAdminOrManager: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { batch: BatchRecord; assignable: boolean },
    private dialogRef: MatDialogRef<BatchDetailDialogComponent>,
    private batchRecordsService: BatchRecordsService,
    private usersService: UsersService,
    private authService: AuthService,
    private fb: FormBuilder,
    private dialog: MatDialog, // Inject MatDialog
  ) {
    this.batchForm = this.fb.group({
      batchNumber: [data.batch.batchNumber],
      operator: [{ value: data.batch.operator, disabled: true }], // Initially disabled
      // Other batch fields
    });
  }

  ngOnInit(): void {
    this.authService.userRole.subscribe((role) => {
      this.isAdminOrManager = role === 'admin' || role === 'manager';
    });

    // Load operators
    this.loadOperators();
  }

  allowOperatorChange() {
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to change the operator?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // If confirmed, enable the operator field
        this.batchForm.get('operator')?.enable();
      }
    });
  }

  loadOperators(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.operators = data;
      },
      error: (err) => console.error('Error loading operators:', err),
    });
  }

  saveBatchDetails(): void {
    if (this.batchForm.valid && this.isAdminOrManager && this.data.assignable) {
      const updatedBatch = this.batchForm.value;
      this.batchRecordsService
        .updateBatchRecord(this.data.batch._id, updatedBatch)
        .subscribe(() => {
          this.dialogRef.close(true); // Close dialog and indicate success
        });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
