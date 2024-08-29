import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCartonInfoComponent } from './master-carton-info.component';

describe('MasterCartonInfoComponent', () => {
  let component: MasterCartonInfoComponent;
  let fixture: ComponentFixture<MasterCartonInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterCartonInfoComponent],
    });
    fixture = TestBed.createComponent(MasterCartonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
