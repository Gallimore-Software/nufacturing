import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ViewInventoryComponent } from './view-inventory.component';
import { InventoryService } from '../inventory.service';

describe('ViewInventoryComponent Integration Test', () => {
  let component: ViewInventoryComponent;
  let fixture: ComponentFixture<ViewInventoryComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewInventoryComponent],
      imports: [HttpClientTestingModule],
      providers: [InventoryService],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInventoryComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should fetch inventory data from API', () => {
    const testData = [{ id: 1, name: 'item1', quantity: 100 }];

    component.ngOnInit();

    const req = httpTestingController.expectOne('/api/inventory');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    expect(component.inventory).toEqual(testData);
  });
});
