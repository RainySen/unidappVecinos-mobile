import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { IonicModule } from '@ionic/angular';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/list-notification/notification.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent, NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class NotificationsModule { }
