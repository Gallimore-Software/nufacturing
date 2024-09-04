import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsInfoComponent } from './ingredients-info.component';

describe('IngredientsInfoComponent', () => {
  let component: IngredientsInfoComponent;
  let fixture: ComponentFixture<IngredientsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsInfoComponent],
    });
    fixture = TestBed.createComponent(IngredientsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
