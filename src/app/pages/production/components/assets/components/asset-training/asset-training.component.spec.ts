import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrainingComponent } from './asset-training.component';

describe('AssetTrainingComponent', () => {
  let component: AssetTrainingComponent;
  let fixture: ComponentFixture<AssetTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetTrainingComponent],
    });
    fixture = TestBed.createComponent(AssetTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
