import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksInProgressComponent } from './works-in-progress.component';

describe('WipComponent', () => {
  let component: WorksInProgressComponent;
  let fixture: ComponentFixture<WorksInProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksInProgressComponent],
    });
    fixture = TestBed.createComponent(WorksInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
