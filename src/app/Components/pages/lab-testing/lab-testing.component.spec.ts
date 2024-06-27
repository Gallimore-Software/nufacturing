import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestingComponent } from './lab-testing.component';

describe('LabTestingComponent', () => {
  let component: LabTestingComponent;
  let fixture: ComponentFixture<LabTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabTestingComponent]
    });
    fixture = TestBed.createComponent(LabTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
