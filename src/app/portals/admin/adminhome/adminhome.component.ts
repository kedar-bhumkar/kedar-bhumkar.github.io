import { Component } from '@angular/core';
import { DCCService } from '../../../../app/services/dcc.service';
import { OktaAuthService } from '../../../app.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  payload: any;
  url: any;
  bannertext:any;
  token:any;

  constructor(private dccService: DCCService,public oktaAuth: OktaAuthService) {this.bannertext ='Admin portal'}





  ngOnInit(): void {
    console.log('auth data ' + JSON.stringify(this.oktaAuth.isAuthenticated));
    this.getToken(); 
    
  }

  async getToken() {
    this.token = await this.oktaAuth.getToken();
    console.log(' this.token - ' + JSON.stringify( this.token));
    console.log(' this.federationID - ' + this.token.federationId);
    this.getLandingPageData(this.token.federationId);
  }
  getLandingPageData(id:any): void {
    this.dccService.getLandingPageData(id,"").subscribe((payload) => {
      this.payload = payload;
      this.url = '/assets/adminportal-2.png';
    });
  }
}
