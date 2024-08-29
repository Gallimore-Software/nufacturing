import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleInfoComponent } from './bottle-info.component';

describe('BottleInfoComponent', () => {
  let component: BottleInfoComponent;
  let fixture: ComponentFixture<BottleInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottleInfoComponent],
    });
    fixture = TestBed.createComponent(BottleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
