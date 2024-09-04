import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.openLogoutDialog();
  }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        localStorage.clear();
        window.location.reload();
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
