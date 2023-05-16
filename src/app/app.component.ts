import { Component } from '@angular/core';
import { DCCService } from '../app/services/dcc.service';
import { OktaAuthService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isAuthenticated: boolean = false; 
  title = 'BlueStar';
  payload: any;
  constructor(private dccService: DCCService, public oktaAuth: OktaAuthService) {}

  ngOnInit(): void {
  
    this.oktaAuth.$isAuthenticated.subscribe(val => this.isAuthenticated = val);
  }


}
