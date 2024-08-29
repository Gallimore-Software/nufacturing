import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickPackCalendarComponent } from './stick-pack-calendar.component';

describe('StickPackCalendarComponent', () => {
  let component: StickPackCalendarComponent;
  let fixture: ComponentFixture<StickPackCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickPackCalendarComponent],
    });
    fixture = TestBed.createComponent(StickPackCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
