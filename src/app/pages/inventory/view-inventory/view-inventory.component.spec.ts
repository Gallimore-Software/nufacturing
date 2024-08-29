import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewInventoryComponent } from './view-inventory.component';
import { InventoryService } from '../inventory.service';

describe('ViewInventoryComponent', () => {
  let component: ViewInventoryComponent;
  let fixture: ComponentFixture<ViewInventoryComponent>;
  let inventoryService: InventoryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewInventoryComponent],
      imports: [HttpClientTestingModule],
      providers: [InventoryService],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInventoryComponent);
    component = fixture.componentInstance;
    inventoryService = TestBed.inject(InventoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getInventory on init', () => {
    spyOn(inventoryService, 'getInventory').and.callThrough();
    component.ngOnInit();
    expect(inventoryService.getInventory).toHaveBeenCalled();
  });
});
