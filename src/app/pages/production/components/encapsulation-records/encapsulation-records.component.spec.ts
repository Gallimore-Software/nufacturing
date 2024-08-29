import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationRecordsComponent } from './encapsulation-records.component';

describe('EncapsulationRecordsComponent', () => {
  let component: EncapsulationRecordsComponent;
  let fixture: ComponentFixture<EncapsulationRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationRecordsComponent],
    });
    fixture = TestBed.createComponent(EncapsulationRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
