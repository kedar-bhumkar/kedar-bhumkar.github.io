import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityhomeRoutingModule } from './facilityhome-routing.module';
import { FacilityhomeComponent } from './facilityhome.component';
import { HeaderComponent } from '../../../common/header/header.component';
import { FooterComponent } from '../../../common//footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FacilityhomeComponent,
  ],
  imports: [
    CommonModule,
    FacilityhomeRoutingModule
  ]
})
export class FacilityhomeModule { }
