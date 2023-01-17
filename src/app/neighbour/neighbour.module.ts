import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeighbourRoutingModule } from './neighbour-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalRecordComponent } from './final-record/final-record.component';


@NgModule({
  declarations: [
    ChangePasswordComponent, FinalRecordComponent
  ],
  imports: [
    CommonModule,
    NeighbourRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NeighbourModule { }
