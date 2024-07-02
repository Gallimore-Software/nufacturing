import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverageCalComponent } from './overage-cal.component';

describe('OverageCalComponent', () => {
  let component: OverageCalComponent;
  let fixture: ComponentFixture<OverageCalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverageCalComponent]
    });
    fixture = TestBed.createComponent(OverageCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
