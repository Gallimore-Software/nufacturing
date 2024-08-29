import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state(
        'inactive',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
      ),
      state(
        'active',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        }),
      ),
      transition('inactive => active', animate('600ms ease-out')), // Transition for incoming slide
      transition('active => inactive', animate('600ms ease-in')), // Transition for outgoing slide
    ]),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = [
    './assets/Stick Pack Layout (vertical).webp',
    './assets/Liquid Sachet Layout 5.webp',
    './assets/Image by Elsa Olofsson.webp',
  ];
  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }

  stopAutoplay() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  previousSlide() {
    this.currentSlide =
      (this.currentSlide + this.images.length - 1) % this.images.length;
  }
}
