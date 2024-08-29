import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAuditsComponent } from './quality-audits.component';

describe('QualityAuditsComponent', () => {
  let component: QualityAuditsComponent;
  let fixture: ComponentFixture<QualityAuditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityAuditsComponent],
    });
    fixture = TestBed.createComponent(QualityAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
