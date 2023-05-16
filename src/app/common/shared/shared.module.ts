import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortalselectorComponent } from '../portalselector/portalselector.component';
import { BannerComponent } from '../banner/banner.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent,PortalselectorComponent,BannerComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, PortalselectorComponent,BannerComponent]
})
export class SharedModule {}
