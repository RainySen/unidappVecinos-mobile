import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor
} from '@capacitor/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private router: Router, private storage: Storage,
    private alertCtrl: AlertController
  ) { }

  public initPush() {
    // console.log(JSON.stringify('inciando notificaciones ---------'));
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  private registerPush() {
    // console.log(JSON.stringify('inciando notificaciones registerPush ---------'));
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });

    PushNotifications.addListener(
      'registration',
      async (token: PushNotificationToken) => {

        // console.log(JSON.stringify('inciando notificaciones token ---------'));
        console.log('My token: ' + JSON.stringify(token));
        console.log('My token3: ' + token.value);
        localStorage.setItem('firebaseToken', token.value);
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
        this.alertNotification(notification.title, notification.body);
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        console.log('data notification recibida', notification);

        // ------ el tipo de notificación se va a manejar de forma numerica:
        // ------ Cartelera = 1;
        // ------ Noticia = 2;
        // ------ Chat porteria = 3;

        const data = notification.notification.data;
        // console.log('Action performed: ' + JSON.stringify(notification.notification));
        // if (data.detailsId) {
        //   this.router.navigateByUrl(`/notification/detail-notification/${data.detailsId}`);
        // }
        if (data.type) {
          this.router.navigateByUrl(`/tabs/home`);
        }
      }
    );
  }

  public async alertNotification(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-notification',
      header,
      message,
      mode: "md",
      buttons: [
        // {
        //   text: 'Cancelar',
        //   role: 'cancel',
        //   cssClass: 'btn-notification',
        //   handler: (blah) => {
        //     console.log('Confirm Cancel: blah');
        //   }
        // },
        {
          text: 'Aceptar',
          cssClass: 'btn-notification',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
