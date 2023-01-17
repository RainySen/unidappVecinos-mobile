import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { IonicModule } from '@ionic/angular';
import { ListNewsComponent } from './list-news/list-news.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListNewsComponent, DetailNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class NewsModule { }
