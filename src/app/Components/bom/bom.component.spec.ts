import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomComponent } from './bom.component';

describe('BomComponent', () => {
  let component: BomComponent;
  let fixture: ComponentFixture<BomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BomComponent]
    });
    fixture = TestBed.createComponent(BomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
