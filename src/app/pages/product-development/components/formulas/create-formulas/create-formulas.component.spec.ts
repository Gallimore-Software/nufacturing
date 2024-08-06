import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormulasComponent } from './create-formulas.component';

describe('CreateFormulasComponent', () => {
  let component: CreateFormulasComponent;
  let fixture: ComponentFixture<CreateFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFormulasComponent],
    });
    fixture = TestBed.createComponent(CreateFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
