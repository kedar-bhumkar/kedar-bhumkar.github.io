import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { EducationComponent } from './portals/facility/education/education.component';
import { ChatbotComponent } from './portals/facility/chatbot/chatbot.component';
import { ContractsComponent } from './portals/facility/contracts/contracts.component';
import { ReportsComponent } from './portals/facility/reports/reports.component';
import { LandingComponent } from './portals/facility/landing/landing.component';
import { RegistrationComponent } from './common/registration/registration.component';
import { AppselectorComponent } from './common/appselector/appselector.component';
import { AdminlandingComponent } from './portals/admin/adminlanding/adminlanding.component';
import { MaintabsComponent } from './portals/admin/maintabs/maintabs.component'
import { EducationDetailComponent } from './portals/facility/education-detail/education-detail.component';

import { SharedModule } from './common/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CallbackComponent } from './common/callback/callback.component';
import { ProtectedComponent } from './common/protected/protected.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpRequestInterceptor } from './interceptors/httpcache.interceptor'

@NgModule({
  declarations: [
    AppComponent,
   
    //FooterComponent,
    EducationComponent,
    EducationDetailComponent,
    ChatbotComponent,
    ContractsComponent,
    ReportsComponent,
    LandingComponent,
    RegistrationComponent,
    AppselectorComponent,
    AdminlandingComponent,
    MaintabsComponent,
    CallbackComponent,
    ProtectedComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,

    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    
    NgxExtendedPdfViewerModule
    
  ],

  exports: [
    //HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
