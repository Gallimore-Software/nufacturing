import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedGoodsComponent } from './finished-goods.component';

describe('FinishedGoodsComponent', () => {
  let component: FinishedGoodsComponent;
  let fixture: ComponentFixture<FinishedGoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishedGoodsComponent]
    });
    fixture = TestBed.createComponent(FinishedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
