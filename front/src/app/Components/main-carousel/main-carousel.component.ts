import { Component, OnInit } from '@angular/core';
import { mainCarouselData } from 'src/Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  carouselData: any;
  currentSlide = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.carouselData = mainCarouselData;
    this.autoPlay();
  }

  // Function to change the current slide
  autoPlay() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === this.carouselData.length - 1 ? 0 : this.currentSlide + 1;
    }, 2000);
  }
}
