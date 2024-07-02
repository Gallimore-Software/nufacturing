import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingBatchRecordsComponent } from './weighing-batch-records.component';

describe('WeighingBatchRecordsComponent', () => {
  let component: WeighingBatchRecordsComponent;
  let fixture: ComponentFixture<WeighingBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingBatchRecordsComponent]
    });
    fixture = TestBed.createComponent(WeighingBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
