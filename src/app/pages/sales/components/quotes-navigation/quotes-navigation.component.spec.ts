import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesNavigationComponent } from './quotes-navigation.component';

describe('QuotesNavigationComponent', () => {
  let component: QuotesNavigationComponent;
  let fixture: ComponentFixture<QuotesNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesNavigationComponent],
    });
    fixture = TestBed.createComponent(QuotesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
