import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftingRecordsComponent } from './shifting-records.component';

describe('ShiftingRecordsComponent', () => {
  let component: ShiftingRecordsComponent;
  let fixture: ComponentFixture<ShiftingRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftingRecordsComponent],
    });
    fixture = TestBed.createComponent(ShiftingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
