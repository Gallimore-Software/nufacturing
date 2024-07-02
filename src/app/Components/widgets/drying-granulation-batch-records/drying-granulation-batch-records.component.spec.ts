import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryingGranulationBatchRecordsComponent } from './drying-granulation-batch-records.component';

describe('DryingGranulationBatchRecordsComponent', () => {
  let component: DryingGranulationBatchRecordsComponent;
  let fixture: ComponentFixture<DryingGranulationBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DryingGranulationBatchRecordsComponent]
    });
    fixture = TestBed.createComponent(DryingGranulationBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
