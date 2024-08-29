import { ComponentFixture, TestBed } from '@angular/core/testing';

import { supplementFactsOnlyComponent } from './supplement-facts-only.component';

describe('supplementFactsOnlyComponent', () => {
  let component: supplementFactsOnlyComponent;
  let fixture: ComponentFixture<supplementFactsOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [supplementFactsOnlyComponent],
    });
    fixture = TestBed.createComponent(supplementFactsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
