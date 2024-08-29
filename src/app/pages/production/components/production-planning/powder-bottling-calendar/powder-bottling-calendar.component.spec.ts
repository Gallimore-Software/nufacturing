import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowderBottlingCalendarComponent } from './powder-bottling-calendar.component';

describe('PowderBottlingCalendarComponent', () => {
  let component: PowderBottlingCalendarComponent;
  let fixture: ComponentFixture<PowderBottlingCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowderBottlingCalendarComponent],
    });
    fixture = TestBed.createComponent(PowderBottlingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
