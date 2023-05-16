import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from '../adminlanding/adminlanding.component';
import { AdminhomeComponent } from './adminhome.component';

const routes: Routes = [
  { 
    path: '', component: AdminhomeComponent, 
    children: [
      { path: '', redirectTo: 'entry', pathMatch: 'full' },    
      { path: 'entry', component: AdminlandingComponent },
      { path: '**', redirectTo: '' }
  ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminhomeRoutingModule {}
