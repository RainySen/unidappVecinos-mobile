import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FinalRecordComponent } from './final-record/final-record.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'final-record',
    pathMatch: 'full'
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'final-record',
    component: FinalRecordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeighbourRoutingModule { }
