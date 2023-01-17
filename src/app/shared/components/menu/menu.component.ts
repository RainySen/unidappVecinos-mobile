import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

import firebase from 'firebase';
import 'firebase/firestore';

import { Capacitor } from '@capacitor/core';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { NeighbourModel } from '../../../../utils/models/Neighbour.model';
import { CRUDService } from '../../services/crud-service/crud.service';
import { SharedService } from '../../services/shared-services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  nameUser: string;
  emailUser: string;

  dbFirestore: any;
  neighbourId: string;
  token: string;
  establishmentPicture: string;
  establishment: any;
  establishmentName: string;

  constructor(
    private navCtrl: NavController, private storage: Storage, private sharedService: SharedService,
    private dbFirebase: AngularFireDatabase, private crudService: CRUDService
  ) {
    this.dbFirestore = firebase.firestore();
  }

  ngOnInit() { }

  async setUserLoggedIn() {

    if (!this.establishmentPicture) {
      this.getEstablishment();
    } else {
      this.establishmentName = await this.storage.get('establishmentName');
      this.establishmentPicture = await this.storage.get('establishmentPicture');
    }
  }

  async getEstablishment() {
    this.token = await this.storage.get('token');
    this.crudService.getModel('user/getMyEstablishments', this.token).subscribe((response: GenericResponseModel) => {
      this.establishment = response.genericObject[0];
      // ------ Se setea la foto al storage para evitar multiples consultas
      this.storage.set('establishmentPicture', this.establishment.ruta_imagen_establ);
      this.storage.set('establishmentName', this.establishment.nom_establec);
      this.establishmentPicture = this.establishment.ruta_imagen_establ;
      this.establishmentName = this.establishment.nom_establec;
    }, error => {
      console.error(error);
    });
  }

  async logOut() {
    // ------ Se guarda el firebaseToken y se setea nuevamente en el storage native ya que solo se puede obtener
    // ------ cuando se incia la app por primera vez. Esto se hace
    // ------ con la finalidad de que si el usuario cierra sesion y desea iniciar sesion con otra cuenta
    // ------ se pueda actualizar el token en firebase para que reciba las notificaciones
    if (Capacitor.platform !== 'web') {
      this.dbFirebase
        .list(`/UsersTokenMovile/${await this.storage.get('establishmentId')}/${await this.storage.get('neighbourPropertyId')}`)
        .remove(await this.storage.get('userId'));
    }
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  updateData() {
    // ------ Se envía el true para indicar que el usuario inicia el componente desde el menu
    this.sharedService.setData(true);
  }

  termsConditions() {
    window.open('https://www.pa-co.co/politica-de-privacidad-y-tratamiento-de-datos-personales-paco/', '_system');
  }

}
