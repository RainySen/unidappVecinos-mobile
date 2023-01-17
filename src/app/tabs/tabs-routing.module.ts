import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'billboard',
        loadChildren: () => import('../billboard/billboard.module').then( m => m.BillboardModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'notification',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'neighbour',
        loadChildren: () => import('../neighbour/neighbour.module').then( m => m.NeighbourModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
