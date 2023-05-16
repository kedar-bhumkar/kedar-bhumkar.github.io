import { Component } from '@angular/core';
import { DCCService } from '../../../../app/services/dcc.service';

@Component({
  selector: 'app-adminlanding',
  templateUrl: './Adminlanding.component.html',
  styleUrls: ['./Adminlanding.component.css'],
})
export class AdminlandingComponent {
  payload: any;
  constructor(private dccService: DCCService) {}

  ngOnInit(): void {
    //this.getLandingPageData();
  }

  getLandingPageData(): void {
    this.dccService
      .getLandingPageData(14, "")
      .subscribe((payload) => (this.payload = payload));
  }
}
