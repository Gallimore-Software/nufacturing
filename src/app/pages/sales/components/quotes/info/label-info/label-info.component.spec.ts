import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInfoComponent } from './label-info.component';

describe('LabelInfoComponent', () => {
  let component: LabelInfoComponent;
  let fixture: ComponentFixture<LabelInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelInfoComponent],
    });
    fixture = TestBed.createComponent(LabelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
