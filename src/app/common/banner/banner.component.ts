import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() bannertext?: any;

  constructor(){
    console.log("bannertext - " + this.bannertext)
    this.bannertext = 'Digital Portal'
  }
}
