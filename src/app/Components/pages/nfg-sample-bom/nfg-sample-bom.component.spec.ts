import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfgSampleBomComponent } from './nfg-sample-bom.component';

describe('NfgSampleBomComponent', () => {
  let component: NfgSampleBomComponent;
  let fixture: ComponentFixture<NfgSampleBomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NfgSampleBomComponent]
    });
    fixture = TestBed.createComponent(NfgSampleBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
