import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighingRecordsComponent } from './weighing-records.component';

describe('WeighingRecordsComponent', () => {
  let component: WeighingRecordsComponent;
  let fixture: ComponentFixture<WeighingRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeighingRecordsComponent],
    });
    fixture = TestBed.createComponent(WeighingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
