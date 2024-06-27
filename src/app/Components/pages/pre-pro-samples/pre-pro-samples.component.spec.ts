import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreProSamplesComponent } from './pre-pro-samples.component';

describe('PreProSamplesComponent', () => {
  let component: PreProSamplesComponent;
  let fixture: ComponentFixture<PreProSamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreProSamplesComponent]
    });
    fixture = TestBed.createComponent(PreProSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
