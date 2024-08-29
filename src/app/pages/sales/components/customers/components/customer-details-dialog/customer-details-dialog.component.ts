import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface CustomerDetails {
  companyName: string;
  displayName: string;
  primaryContact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  website: string;
  estimate?: number;
}

@Component({
  selector: 'app-customer-details-dialog',
  templateUrl: './customer-details-dialog.component.html',
  styleUrls: ['./customer-details-dialog.component.scss'],
})
export class CustomerDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerDetails,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
