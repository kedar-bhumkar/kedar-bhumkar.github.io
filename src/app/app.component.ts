import { Component } from '@angular/core';
import { DCCService } from '../app/services/dcc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BlueStar';
  payload: any;
  constructor(private dccService: DCCService) {}

  ngOnInit(): void {
    //this.getLandingPageData();
  }

  getLandingPageData(): void {
    this.dccService
      .getLandingPageData()
      .subscribe((payload) => (this.payload = payload));
  }
}
