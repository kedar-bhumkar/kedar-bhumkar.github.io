import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { ContractDetailComponent } from '../contract-detail/contract-detail.component';
import { FacilityhomeComponent } from './facilityhome.component';
import { EducationDetailComponent } from '../education-detail/education-detail.component';

const routes: Routes = [
  { 
    path: '', component: FacilityhomeComponent, 
    children: [
      { path: '', redirectTo: 'entry', pathMatch: 'full' },
      { path: 'contractdetail', component:  ContractDetailComponent},
      { path: 'educationdetail', component:  EducationDetailComponent},
      { path: 'entry', component: LandingComponent },
      { path: '**', redirectTo: '' }
  ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilityhomeRoutingModule {}
