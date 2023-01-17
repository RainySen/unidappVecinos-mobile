import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { InBuildingComponent } from './components/in-building/in-building.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RemoveTagHtmlPipe } from './pipes/remove-tag-html.pipe';

@NgModule({
  declarations: [
    // ------ Components ------
    MenuComponent, InBuildingComponent,
    // ------ Pipes ------
    TruncatePipe,
    RemoveTagHtmlPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule
  ],
  exports: [
    MenuComponent, TruncatePipe, RemoveTagHtmlPipe
  ]
})
export class SharedModule { }
