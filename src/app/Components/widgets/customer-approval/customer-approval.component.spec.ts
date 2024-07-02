import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApprovalComponent } from './customer-approval.component';

describe('CustomerApprovalComponent', () => {
  let component: CustomerApprovalComponent;
  let fixture: ComponentFixture<CustomerApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerApprovalComponent]
    });
    fixture = TestBed.createComponent(CustomerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
