import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

class MockDashboardService {
  getKeyMetrics() {
    return of({
      totalOrders: 120,
      ordersInProcess: 45,
      totalQuotes: 30,
      activeQuotes: 20,
      expiredQuotes: 10,
    });
  }

  getRecentActivity() {
    return of([
      { details: 'Order #1234 - Status: In Process' },
      { details: 'Quote #5678 - Status: Active' },
    ]);
  }

  getAlerts() {
    return of([
      { message: 'Payment overdue for Order #1234' },
      { message: 'New Quote #5678 awaiting approval' },
    ]);
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: DashboardService, useClass: MockDashboardService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load key metrics on init', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.keyMetrics.totalOrders).toBe(120);
    expect(component.keyMetrics.ordersInProcess).toBe(45);
    expect(component.keyMetrics.totalQuotes).toBe(30);
    expect(component.keyMetrics.activeQuotes).toBe(20);
    expect(component.keyMetrics.expiredQuotes).toBe(10);
  });

  it('should load recent activity on init', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.recentActivity.length).toBe(2);
    expect(component.recentActivity[0].details).toBe(
      'Order #1234 - Status: In Process',
    );
    expect(component.recentActivity[1].details).toBe(
      'Quote #5678 - Status: Active',
    );
  });

  it('should load alerts on init', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.alerts.length).toBe(2);
    expect(component.alerts[0].message).toBe('Payment overdue for Order #1234');
    expect(component.alerts[1].message).toBe(
      'New Quote #5678 awaiting approval',
    );
  });
});
