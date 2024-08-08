import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsDialogComponent } from './customer-details-dialog.component';

describe('CustomerDetailsDialogComponent', () => {
  let component: CustomerDetailsDialogComponent;
  let fixture: ComponentFixture<CustomerDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(CustomerDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
