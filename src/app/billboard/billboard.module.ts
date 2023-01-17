import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillboardRoutingModule } from './billboard-routing.module';
import { IonicModule } from '@ionic/angular';

import { ListBillboardComponent } from './components/list-billboard/list-billboard.component';
import { DetailBillboardComponent } from './components/detail-billboard/detail-billboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListBillboardComponent, DetailBillboardComponent
  ],
  imports: [
    CommonModule,
    BillboardRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class BillboardModule { }
