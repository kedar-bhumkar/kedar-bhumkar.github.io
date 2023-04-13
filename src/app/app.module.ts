import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service'
import { AppComponent } from './app.component';

import { EducationComponent } from './portals/facility/education/education.component';
import { ChatbotComponent } from './portals/facility/chatbot/chatbot.component';
import { ContractsComponent } from './portals/facility/contracts/contracts.component';
import { ReportsComponent } from './portals/facility/reports/reports.component';
import { LandingComponent } from './portals/facility/landing/landing.component';
import { RegistrationComponent } from './common/registration/registration.component';
import { AppselectorComponent } from './common/appselector/appselector.component';



@NgModule({
  declarations: [
    AppComponent,
  
    EducationComponent,
    ChatbotComponent,
    ContractsComponent,
    ReportsComponent,
    LandingComponent,
    RegistrationComponent,
    AppselectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
