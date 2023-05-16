import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityhomeRoutingModule } from './facilityhome-routing.module';
import { FacilityhomeComponent } from './facilityhome.component';

import { SharedModule } from '../../../common/shared/shared.module';



@NgModule({
  declarations: [
    
    FacilityhomeComponent,

  ],
  imports: [
    CommonModule,
    FacilityhomeRoutingModule,
    SharedModule
  ]
})
export class FacilityhomeModule { }
