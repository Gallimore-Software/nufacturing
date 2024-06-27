import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingBatchRecordsComponent } from './mixing-batch-records.component';

describe('MixingBatchRecordsComponent', () => {
  let component: MixingBatchRecordsComponent;
  let fixture: ComponentFixture<MixingBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixingBatchRecordsComponent]
    });
    fixture = TestBed.createComponent(MixingBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
