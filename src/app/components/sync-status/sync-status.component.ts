import { Component, OnInit } from '@angular/core';
import { SyncStatusService } from './sync-status.service';

@Component({
  selector: 'app-sync-status',
  templateUrl: './sync-status.component.html',
  styleUrls: ['./sync-status.component.css'],
})
export class SyncStatusComponent implements OnInit {
  syncStatuses: any[] = [];

  constructor(private syncStatusService: SyncStatusService) {}

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses(): void {
    this.syncStatusService.getSyncStatus().subscribe(
      (data) => (this.syncStatuses = data),
      (error) => console.error('Error fetching sync status', error),
    );
  }
}
