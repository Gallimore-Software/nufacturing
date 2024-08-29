import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingRecordsComponent } from './packaging-records.component';

describe('PackagingRecordsComponent', () => {
  let component: PackagingRecordsComponent;
  let fixture: ComponentFixture<PackagingRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagingRecordsComponent],
    });
    fixture = TestBed.createComponent(PackagingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
