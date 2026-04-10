import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBatchRecordsComponent } from './list-batch-records.component';

describe('ListBatchRecordsComponent', () => {
  let component: ListBatchRecordsComponent;
  let fixture: ComponentFixture<ListBatchRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBatchRecordsComponent],
    });
    fixture = TestBed.createComponent(ListBatchRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
