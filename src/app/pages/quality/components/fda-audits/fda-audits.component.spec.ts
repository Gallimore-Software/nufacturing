import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaAuditsComponent } from './fda-audits.component';

describe('FdaAuditsComponent', () => {
  let component: FdaAuditsComponent;
  let fixture: ComponentFixture<FdaAuditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FdaAuditsComponent],
    });
    fixture = TestBed.createComponent(FdaAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
