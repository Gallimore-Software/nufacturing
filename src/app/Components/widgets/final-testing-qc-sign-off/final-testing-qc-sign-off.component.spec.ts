import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTestingQcSignOffComponent } from './final-testing-qc-sign-off.component';

describe('FinalTestingQcSignOffComponent', () => {
  let component: FinalTestingQcSignOffComponent;
  let fixture: ComponentFixture<FinalTestingQcSignOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalTestingQcSignOffComponent]
    });
    fixture = TestBed.createComponent(FinalTestingQcSignOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
