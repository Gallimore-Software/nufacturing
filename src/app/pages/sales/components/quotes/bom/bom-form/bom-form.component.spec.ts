import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomFormComponent } from './quote-form.component';

describe('BomFormComponent', () => {
  let component: BomFormComponent;
  let fixture: ComponentFixture<BomFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomFormComponent],
    });
    fixture = TestBed.createComponent(BomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
