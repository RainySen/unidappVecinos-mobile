import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNewsComponent } from './list-news/list-news.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListNewsComponent
  },
  {
    path: 'detail-news',
    component: DetailNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
