import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { FinalRecordComponent } from './neighbour/final-record/final-record.component';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'notification',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'neighbour',
    loadChildren: () => import('./neighbour/neighbour.module').then( m => m.NeighbourModule),
    canLoad: [AuthGuard]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
