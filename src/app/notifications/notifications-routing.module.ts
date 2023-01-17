import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { DetailNotificationComponent } from './components/notification/detail-notification/detail-notification.component';
import { NotificationComponent } from './components/notification/list-notification/notification.component';


const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '**',
    redirectTo: 'chat'
  },
  {
    path: 'detail-notification/:id',
    component: DetailNotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
