import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBatchRecordsComponent } from './create-batch-records.component';

describe('CreateBatchRecordsComponent', () => {
  let component: CreateBatchRecordsComponent;
  let fixture: ComponentFixture<CreateBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBatchRecordsComponent],
    });
    fixture = TestBed.createComponent(CreateBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
