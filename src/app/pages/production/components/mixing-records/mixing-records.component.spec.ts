import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingRecordsComponent } from './mixing-records.component';

describe('MixingRecordsComponent', () => {
  let component: MixingRecordsComponent;
  let fixture: ComponentFixture<MixingRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MixingRecordsComponent],
    });
    fixture = TestBed.createComponent(MixingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
