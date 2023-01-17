import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/shared/services/crud-service/crud.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(
    private crudService: CRUDService, private storage: Storage
  ) { }

  ngOnInit() {
    this.getNotifications();
  }

  async getNotifications() {
    console.log('obtieniendo notificaciones');
    this.crudService.getModel('notification/getByEstablishment/5ecd8bdf57780000cd006792', await this.storage.get('token'))
    .subscribe(resp => {
      console.log('listado notificaciones');
      console.log(resp);
    })
  }

}
