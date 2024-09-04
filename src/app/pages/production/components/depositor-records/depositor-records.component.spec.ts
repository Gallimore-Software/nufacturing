import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositorRecordsComponent } from './depositor-records.component';

describe('DepositorRecordsComponent', () => {
  let component: DepositorRecordsComponent;
  let fixture: ComponentFixture<DepositorRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositorRecordsComponent],
    });
    fixture = TestBed.createComponent(DepositorRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
