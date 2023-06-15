import { Component,Input } from '@angular/core';
import { OktaAuthService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() payload?: any;
  @Input() url?: any;
  @Input() bannertext?: any;
  isAuthenticated: boolean = false; 

  constructor(public oktaAuth: OktaAuthService) {
    console.log("url - " + this.url)
    console.log("bannertext - " + this.bannertext)
    console.log("this.payload - " + this.payload)
  }


  ngOnInit(): void {
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
    console.log("this.payload .... - " + this.payload)
  }


}
