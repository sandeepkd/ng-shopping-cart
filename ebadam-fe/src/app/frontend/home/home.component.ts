import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

slides = [
   {'image': 'http://ebadam.com/media/resized/1920x465/ves_contentslider/upload/Website_Banners_latest.jpg'},
   {'image': 'http://ebadam.com/media/resized/1920x465/ves_contentslider/upload/Website_Banners_03.jpg'},
   {'image': 'http://ebadam.com/media/resized/1920x465/ves_contentslider/upload/Website_Banners_nwe.jpg'}];

   addtocart(){

       alert("In Progress...")

   }
}
