import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleInfoComponent } from './capsule-info.component';

describe('CapsuleInfoComponent', () => {
  let component: CapsuleInfoComponent;
  let fixture: ComponentFixture<CapsuleInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapsuleInfoComponent],
    });
    fixture = TestBed.createComponent(CapsuleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
