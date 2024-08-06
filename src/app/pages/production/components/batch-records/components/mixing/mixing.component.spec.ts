import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingComponent } from './mixing.component';

describe('MixingComponent', () => {
  let component: MixingComponent;
  let fixture: ComponentFixture<MixingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixingComponent],
    });
    fixture = TestBed.createComponent(MixingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
