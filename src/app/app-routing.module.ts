import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './common/registration/registration.component';
import { AppselectorComponent } from './common/appselector/appselector.component';


//@ToDo - module specific routing 
//https://stackoverflow.com/questions/51543045/split-routes-into-separate-modules-in-angular-6

const routes: Routes = [ 
  
  { path: 'login', component: RegistrationComponent }, 
  { path: 'apps', component: AppselectorComponent }, 


  { path: 'facilityhome', loadChildren: () => import('./portals/facility/facilityhome/facilityhome.module').then(m => m.FacilityhomeModule) },
  { path: '**', redirectTo: 'apps', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
