import { Component } from '@angular/core';
import { DCCService } from '../../../../app/services/dcc.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  payload: any;
  constructor(private dccService: DCCService) {}

  ngOnInit(): void {
    this.getLandingPageData();
  }

  getLandingPageData(): void {
    this.dccService
      .getLandingPageData()
      .subscribe((payload) => (this.payload = payload));
  }
}
