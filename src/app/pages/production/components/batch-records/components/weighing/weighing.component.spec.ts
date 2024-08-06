import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingComponent } from './weighing.component';

describe('WeighingComponent', () => {
  let component: WeighingComponent;
  let fixture: ComponentFixture<WeighingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingComponent],
    });
    fixture = TestBed.createComponent(WeighingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
