import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductSkusComponent } from './list-product-skus.component';

describe('ListProductSkusComponent', () => {
  let component: ListProductSkusComponent;
  let fixture: ComponentFixture<ListProductSkusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductSkusComponent],
    });
    fixture = TestBed.createComponent(ListProductSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
