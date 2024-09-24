import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailDialogComponent } from './batch-detail-dialog.component';

describe('BatchDetailDialogComponent', () => {
  let component: BatchDetailDialogComponent;
  let fixture: ComponentFixture<BatchDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchDetailDialogComponent],
    });
    fixture = TestBed.createComponent(BatchDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
