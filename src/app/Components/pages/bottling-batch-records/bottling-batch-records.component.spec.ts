import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingBatchRecordsComponent } from './bottling-batch-records.component';

describe('BottlingBatchRecordsComponent', () => {
  let component: BottlingBatchRecordsComponent;
  let fixture: ComponentFixture<BottlingBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottlingBatchRecordsComponent]
    });
    fixture = TestBed.createComponent(BottlingBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
