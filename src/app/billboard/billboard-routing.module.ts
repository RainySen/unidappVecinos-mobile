import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBillboardComponent } from './components/list-billboard/list-billboard.component';
import { DetailBillboardComponent } from './components/detail-billboard/detail-billboard.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListBillboardComponent
  },
  {
    path: 'detail-billboard',
    component: DetailBillboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillboardRoutingModule { }
