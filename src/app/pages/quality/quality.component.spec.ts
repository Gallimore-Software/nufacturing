import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityComponent } from './quality.component';

describe('QualityComponent', () => {
  let component: QualityComponent;
  let fixture: ComponentFixture<QualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityComponent]
    });
    fixture = TestBed.createComponent(QualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
