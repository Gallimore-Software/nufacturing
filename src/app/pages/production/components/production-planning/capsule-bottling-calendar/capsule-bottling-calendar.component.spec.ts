import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleBottlingCalendarComponent } from './capsule-bottling-calendar.component';

describe('CapsuleBottlingCalendarComponent', () => {
  let component: CapsuleBottlingCalendarComponent;
  let fixture: ComponentFixture<CapsuleBottlingCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapsuleBottlingCalendarComponent],
    });
    fixture = TestBed.createComponent(CapsuleBottlingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
