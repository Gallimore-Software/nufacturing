import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductSkusComponent } from './create-product-skus.component';

describe('CreateProductSkusComponent', () => {
  let component: CreateProductSkusComponent;
  let fixture: ComponentFixture<CreateProductSkusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductSkusComponent],
    });
    fixture = TestBed.createComponent(CreateProductSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
