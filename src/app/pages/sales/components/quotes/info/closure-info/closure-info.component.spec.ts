import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureInfoComponent } from './closure-info.component';

describe('ClosureInfoComponent', () => {
  let component: ClosureInfoComponent;
  let fixture: ComponentFixture<ClosureInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosureInfoComponent],
    });
    fixture = TestBed.createComponent(ClosureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
