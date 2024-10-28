import { Component, OnInit } from '@angular/core';
import { SyncStatusService } from './sync-status.service';

@Component({
  selector: 'app-sync-status',
  templateUrl: './sync-status.component.html',
  styleUrls: ['./sync-status.component.css'],
})
export class SyncStatusComponent implements OnInit {
  syncStatuses: unknown[] = [];

  constructor(private syncStatusService: SyncStatusService) {}

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses(): void {
    this.syncStatusService.getSyncStatus().subscribe(
      (data) => (this.syncStatuses = data),
      // eslint-disable-next-line no-undef
      (error) => console.log('Error fetching sync status', error)
    );
  }
}
