import { Component } from '@angular/core';
import { DCCService } from '../../../../app/services/dcc.service';

@Component({
  selector: 'app-facilityhome',
  templateUrl: './facilityhome.component.html',
  styleUrls: ['./facilityhome.component.css']
})
export class FacilityhomeComponent {
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
