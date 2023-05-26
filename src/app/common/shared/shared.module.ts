import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PortalselectorComponent } from '../portalselector/portalselector.component';
import { BannerComponent } from '../banner/banner.component';
import { SpinnerComponent } from '../spinner/spinner.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent,PortalselectorComponent,BannerComponent,SpinnerComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, PortalselectorComponent,BannerComponent,SpinnerComponent]
})
export class SharedModule {}
