import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-area',
  templateUrl: './features-area.component.html',
  styleUrls: ['./features-area.component.scss']
})
export class FeaturesAreaComponent implements OnInit {

  featureData = [
    {
      bgColor:'',
      icon_dark:'assets/img/icon/features/features-icon-1.png',
      icon_light:'assets/img/icon/features/features-icon-1-light.png',
      title:"Grow your business",
      subtitle:'Add new, trending products.',
    },
    {
      bgColor:'yellow-bg',
      icon_dark:'assets/img/icon/features/features-icon-2.png',
      icon_light:'assets/img/icon/features/features-icon-2-light.png',
      title:"Earn money dy selling online",
      subtitle:'Get paid by selling from your store with secured payment methods.',
    },
    {
      bgColor:'green-bg',
      icon_dark:'assets/img/icon/features/features-icon-3.png',
      icon_light:'assets/img/icon/features/features-icon-3-light.png',
      title:"Discover <br /> Top sellers & Creators",
      subtitle:'Explore beautiful work by talented business people from around the world.',
    },
    {
      bgColor:'green-bg',
      icon_dark:'assets/img/icon/features/features-icon-4.png',
      icon_light:'assets/img/icon/features/features-icon-4-light.png',
      title:"Buy and sell your products",
      subtitle:'Easily buy and sell products in the largest marketplace.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
