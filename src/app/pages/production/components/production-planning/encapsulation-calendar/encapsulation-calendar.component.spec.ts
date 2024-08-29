import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationCalendarComponent } from './encapsulation-calendar.component';

describe('EncapsulationCalendarComponent', () => {
  let component: EncapsulationCalendarComponent;
  let fixture: ComponentFixture<EncapsulationCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationCalendarComponent],
    });
    fixture = TestBed.createComponent(EncapsulationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
