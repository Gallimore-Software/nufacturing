import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSheetComponent } from './quote-sheet.component';

describe('QuoteSheetComponent', () => {
  let component: QuoteSheetComponent;
  let fixture: ComponentFixture<QuoteSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteSheetComponent]
    });
    fixture = TestBed.createComponent(QuoteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
