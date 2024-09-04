import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBreakdownComponent } from './package-breakdown.component';

describe('PackageBreakdownComponent', () => {
  let component: PackageBreakdownComponent;
  let fixture: ComponentFixture<PackageBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageBreakdownComponent],
    });
    fixture = TestBed.createComponent(PackageBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
