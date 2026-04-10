import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start autoplay on init', () => {
    jest.spyOn(component, 'startAutoplay');
    component.ngOnInit();
    expect(component.startAutoplay).toHaveBeenCalled();
  });

  it('should stop autoplay on destroy', () => {
    jest.spyOn(component, 'stopAutoplay');
    component.ngOnDestroy();
    expect(component.stopAutoplay).toHaveBeenCalled();
  });

  it('should move to the next slide', () => {
    component.currentSlide = 0;
    component.nextSlide();
    expect(component.currentSlide).toBe(1);
  });

  it('should move to the previous slide', () => {
    component.currentSlide = 1;
    component.previousSlide();
    expect(component.currentSlide).toBe(0);
  });
});
