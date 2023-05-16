import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DCCService } from '../../../../app/services/dcc.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

//6f29a91f7a77448a8421b6d5d1e30038

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent {
  payload: any;
  public pdfUrl:any;

  constructor(private dccService: DCCService, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    
  
    this.getDocs('facilitybinder');
  }

  async getDocs(docType:String){
    this.dccService.getDocs(docType).subscribe((payload) => {
      console.log('Recvd doc payload - ' + JSON.stringify(payload))
      this.payload = payload;
      if(docType == 'facilitybinder'){
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(payload.metadata[0].docType);
      }
 
    });
  }

  onTabClick(event: { tab: { textLabel: any; }; }) {
    console.log(event);
    console.log(event.tab.textLabel);

    this.getDocs(event.tab.textLabel);

  }

}
