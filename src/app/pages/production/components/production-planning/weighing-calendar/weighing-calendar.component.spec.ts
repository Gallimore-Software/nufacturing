import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingCalendarComponent } from './weighing-calendar.component';

describe('WeighingCalendarComponent', () => {
  let component: WeighingCalendarComponent;
  let fixture: ComponentFixture<WeighingCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingCalendarComponent],
    });
    fixture = TestBed.createComponent(WeighingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
