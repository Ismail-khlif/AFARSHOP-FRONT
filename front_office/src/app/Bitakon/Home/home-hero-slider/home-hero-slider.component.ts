import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay,Navigation } from "swiper";

SwiperCore.use([Autoplay,Navigation]);

@Component({
  selector: 'app-home-hero-slider',
  templateUrl: './home-hero-slider.component.html',
  styleUrls: ['./home-hero-slider.component.scss']
})
export class HomeHeroSliderComponent implements OnInit {

  sliderData = [
    {
      id:1,
      bigImg:'assets/img/slider/7.jpg',
    },
    {
      id:2,
      bigImg:'assets/img/slider/8.jpg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
