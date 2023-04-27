import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-sellers',
  templateUrl: './popular-sellers.component.html',
  styleUrls: ['./popular-sellers.component.scss']
})
export class PopularSellersComponent implements OnInit {


  sellersData = [
    {
      id:1,
      img:'assets/img/seller/zara.png', 
      name:'Zara',
      revenue:'00.74',
      color:''
    },
    {
      id:2,
      img:'assets/img/seller/bershka.jpg',
      name:'bershka',
      revenue:'00.254',
      color:'clr-green'
    },
    {
      id:3,
      img:'assets/img/seller/jennyfer.jpg',
      name:'Jennyfer',
      revenue:'00.20',
      color:'clr-orange'
    },
    {
      id:4,
      img:'assets/img/seller/baya.jpg',
      name:'baya',
      revenue:'00.74',
      color:'clr-purple'
    },
    {
      id:5,
      img:'assets/img/seller/poka.jpg',
      name:'poka',
      revenue:'00.74',
      color:'clr-yellow'
    },
    {
      id:6,
      img:'assets/img/seller/toys.jpg',
      name:'ToysRUs',
      revenue:'00.78',
      color:'clr-pink'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
