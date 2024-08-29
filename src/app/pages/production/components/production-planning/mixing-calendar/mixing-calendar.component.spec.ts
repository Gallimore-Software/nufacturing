import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingCalendarComponent } from './mixing-calendar.component';

describe('MixingCalendarComponent', () => {
  let component: MixingCalendarComponent;
  let fixture: ComponentFixture<MixingCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixingCalendarComponent],
    });
    fixture = TestBed.createComponent(MixingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
