import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPackCalendarComponent } from './co-pack-calendar.component';

describe('CoPackCalendarComponent', () => {
  let component: CoPackCalendarComponent;
  let fixture: ComponentFixture<CoPackCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoPackCalendarComponent],
    });
    fixture = TestBed.createComponent(CoPackCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
