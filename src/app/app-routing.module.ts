import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './common/registration/registration.component';
import { AppselectorComponent } from './common/appselector/appselector.component';
import { OktaAuthGuard } from './app.guard';
import { CallbackComponent } from './common/callback/callback.component';
import { ProtectedComponent } from './common/protected/protected.component';

//@ToDo - module specific routing
//https://stackoverflow.com/questions/51543045/split-routes-into-separate-modules-in-angular-6

const routes: Routes = [
  { path: 'login', component: RegistrationComponent },
  { path: 'apps', component: AppselectorComponent,canActivate: [OktaAuthGuard], },

  {
    path: 'facilityhome',
    loadChildren: () =>
      import('./portals/facility/facilityhome/facilityhome.module').then(
        (m) => m.FacilityhomeModule
      ),
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'adminhome',
    loadChildren: () =>
      import('./portals/admin/adminhome/adminhome.module').then(
        (m) => m.AdminhomeModule
      ),
    canActivate: [OktaAuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  //{ path: '**', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [OktaAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
