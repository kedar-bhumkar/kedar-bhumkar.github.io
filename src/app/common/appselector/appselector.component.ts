import { Component } from '@angular/core';
import { DCCService } from '../../services/dcc.service';

@Component({
  selector: 'app-appselector',
  templateUrl: './appselector.component.html',
  styleUrls: ['./appselector.component.css']
})
export class AppselectorComponent {
  payload: any;
  constructor(private dccService: DCCService) {}

  ngOnInit(): void {
    this.getAppSelectorData();
  }

  getAppSelectorData(): void {
    this.dccService
      .getAppSelectorData()
      .subscribe((payload) => {
        console.log('appselector data ' + JSON.stringify(payload));
        this.payload = payload;
      });
  }
}
