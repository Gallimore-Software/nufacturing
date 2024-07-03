import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplimentFactsOnlyComponent } from './suppliment-facts-only.component';

describe('SupplimentFactsOnlyComponent', () => {
  let component: SupplimentFactsOnlyComponent;
  let fixture: ComponentFixture<SupplimentFactsOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplimentFactsOnlyComponent]
    });
    fixture = TestBed.createComponent(SupplimentFactsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
