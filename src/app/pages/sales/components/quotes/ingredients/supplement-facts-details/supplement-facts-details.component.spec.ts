import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementFactsDetailsComponent } from './supplement-facts-details.component';

describe('SupplementFactsDetailsComponent', () => {
  let component: SupplementFactsDetailsComponent;
  let fixture: ComponentFixture<SupplementFactsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementFactsDetailsComponent],
    });
    fixture = TestBed.createComponent(SupplementFactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
