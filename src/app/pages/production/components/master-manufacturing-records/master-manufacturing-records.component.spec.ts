import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterManufacturingRecordsComponent } from './master-manufacturing-records.component';

describe('MasterManufacturingRecordsComponent', () => {
  let component: MasterManufacturingRecordsComponent;
  let fixture: ComponentFixture<MasterManufacturingRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterManufacturingRecordsComponent],
    });
    fixture = TestBed.createComponent(MasterManufacturingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
