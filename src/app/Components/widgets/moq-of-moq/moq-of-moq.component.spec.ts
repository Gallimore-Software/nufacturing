import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoqOfMoqComponent } from './moq-of-moq.component';

describe('MoqOfMoqComponent', () => {
  let component: MoqOfMoqComponent;
  let fixture: ComponentFixture<MoqOfMoqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoqOfMoqComponent]
    });
    fixture = TestBed.createComponent(MoqOfMoqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
