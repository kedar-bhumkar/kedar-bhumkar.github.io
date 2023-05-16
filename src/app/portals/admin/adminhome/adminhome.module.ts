import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminhomeRoutingModule } from './adminhome-routing.module';
import { AdminhomeComponent } from './adminhome.component';
import { SharedModule } from '../../../common/shared/shared.module';
//import { MaintabsComponent } from '../maintabs/maintabs.component';



@NgModule({
  declarations: [
    AdminhomeComponent,
    

  ],
  imports: [
    CommonModule,
    AdminhomeRoutingModule,
    SharedModule,
    
  ]
})
export class AdminhomeModule { }
 