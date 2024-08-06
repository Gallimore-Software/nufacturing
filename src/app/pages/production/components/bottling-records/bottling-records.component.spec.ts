import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingRecordsComponent } from './bottling-records.component';

describe('BottlingRecordsComponent', () => {
  let component: BottlingRecordsComponent;
  let fixture: ComponentFixture<BottlingRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottlingRecordsComponent],
    });
    fixture = TestBed.createComponent(BottlingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
