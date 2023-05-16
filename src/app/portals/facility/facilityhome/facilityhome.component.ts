import { Component } from '@angular/core';
import { getToken } from '@okta/okta-auth-js';
import { DCCService } from '../../../../app/services/dcc.service';
import { OktaAuthService } from '../../../app.service';

@Component({
  selector: 'app-facilityhome',
  templateUrl: './facilityhome.component.html',
  styleUrls: ['./facilityhome.component.css'],
})
export class FacilityhomeComponent {
  payload: any;
  url: any;
  token:any;
  constructor(private dccService: DCCService, public oktaAuth: OktaAuthService) {}

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
    this.dccService.getLandingPageData(id, "FACILITY_MENU").subscribe((payload) => {
      this.payload = payload;
      this.url = '/assets/Facilityportal-2.png';
    });
  }
}
