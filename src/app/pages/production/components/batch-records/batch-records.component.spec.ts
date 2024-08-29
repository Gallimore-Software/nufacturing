import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchRecordsComponent } from './batch-records.component';

describe('BatchRecordsComponent', () => {
  let component: BatchRecordsComponent;
  let fixture: ComponentFixture<BatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchRecordsComponent],
    });
    fixture = TestBed.createComponent(BatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
