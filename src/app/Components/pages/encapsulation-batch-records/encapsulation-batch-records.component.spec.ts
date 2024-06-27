import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationBatchRecordsComponent } from './encapsulation-batch-records.component';

describe('EncapsulationBatchRecordsComponent', () => {
  let component: EncapsulationBatchRecordsComponent;
  let fixture: ComponentFixture<EncapsulationBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationBatchRecordsComponent]
    });
    fixture = TestBed.createComponent(EncapsulationBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
