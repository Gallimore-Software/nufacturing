import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetGranulationBatchRecordsComponent } from './wet-granulation-batch-records.component';

describe('WetGranulationBatchRecordsComponent', () => {
  let component: WetGranulationBatchRecordsComponent;
  let fixture: ComponentFixture<WetGranulationBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WetGranulationBatchRecordsComponent]
    });
    fixture = TestBed.createComponent(WetGranulationBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
