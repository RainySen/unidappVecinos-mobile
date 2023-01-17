import { Component, OnInit, ɵConsole } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { CRUDService } from 'src/app/shared/services/crud-service/crud.service';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { EstablishmentModel } from 'src/utils/models/Establishment.model';
import { Storage } from '@ionic/storage';
import { NeighbourModel } from 'src/utils/models/Neighbour.model';
import { Capacitor } from '@capacitor/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  nameUser: string;
  emailUser: string;
  limitTitle = 40;

  neighbourId: string;
  token: string;
  neighbourModel: NeighbourModel = new NeighbourModel();

  establishment: EstablishmentModel = new EstablishmentModel();
  establishmentId: any;

  // -------- CARTELERAS --------
  billboards: [] = [];
  finalBillboards: any[];
  isDataBillboardEmpty = false;
  isDataBillboard = true;
  oneBillboard = false;

  // -------- NOTICIAS --------
  news: [] = [];
  finalnews: any[];
  isDataNewsEmpty = false;
  isDataNews = true;
  oneNews = false;

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  slideOptsBillboard = {
    slidesPerView: 1.1,
    freeMode: true
  };

  slideOptsNews = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor(
    private menuCrtl: MenuController, private crudService: CRUDService, private navCtrl: NavController,
    private sharedService: SharedService, private storage: Storage, private dbFirebase: AngularFireDatabase
  ) { }

  async ngOnInit(): Promise<void> { }

  async ionViewWillEnter() {
    this.menuCrtl.enable(true);
    this.token = await this.storage.get('token');
    this.getEstablishment();
    this.nameUser = await this.storage.get('userName');
    this.emailUser = await this.storage.get('userEmail');
    this.neighbourProperty();
  }

  toggleMenu() {
    this.menuCrtl.toggle();
  }

  getEstablishment() {
    this.crudService.getModel('user/getMyEstablishments', this.token).subscribe((response: GenericResponseModel) => {
      this.establishment = response.genericObject[0];
      const ESTABLISHMENT_ID = this.establishment._id;
      this.storage.set('establishmentId', ESTABLISHMENT_ID);
      this.storage.set('establishmentPicture', this.establishment.ruta_imagen_establ);
      this.storage.set('establishmentName', this.establishment.nom_establec);
      this.establishmentId = this.establishment._id;
      this.getBillboards();
      this.getNews();
    }, error => {
      console.error(error);
      this.logOut();
    });
  }

  getBillboards() {
    const isBillboard = {
      type: 'C',
      direction: 'des',
      direction_by: 'start_date'
    };
    this.crudService.getModel(`newsletter/getByType/${this.establishmentId}/${isBillboard.type}/${isBillboard.direction}`, this.token)
      .subscribe(res => {
        this.billboards = res.genericObject;
        // ------ El metodo 'slice' me devuelve las ultimas 3 carteleras del array
        if (this.billboards.length >= 4) {
          this.finalBillboards = this.billboards.slice(0, 3);
        } else {
          this.finalBillboards = this.billboards;
        }

        if (this.billboards.length == 0) {
          this.isDataBillboardEmpty = true;
          this.isDataBillboard = false;
        } else {
          this.isDataBillboardEmpty = false;
          this.isDataBillboard = false;
        }
        // ------ Si solo hay una cartelera disponible, entonces se ajusta la visualización
        // ------ del slide
        if (this.finalBillboards.length == 1) {
          this.oneBillboard = true;
        } else {
          this.oneBillboard = false;
        }


      }, error => {
        console.error(error);
        this.isDataBillboardEmpty = true;
        this.isDataBillboard = false;
      })
  }

  viewDetailBillboard(billboard) {
    this.sharedService.setData(billboard);
    this.navCtrl.navigateRoot('/tabs/billboard/detail-billboard', { animated: true });
  }

  getNews() {
    const isNews = {
      type: 'N',
      direction: 'des',
      direction_by: 'start_date'
    };
    this.crudService.getModel(`newsletter/getByType/${this.establishmentId}/${isNews.type}/${isNews.direction}`, this.token)
      .subscribe((res: GenericResponseModel) => {
        this.news = res.genericObject;

        // ------ El metodo 'slice' me devuelve las ultimas 3 noticias del array
        if (this.news.length >= 4) {
          this.finalnews = this.news.slice(0, 3);
        } else {
          this.finalnews = this.news;
        }

        if (this.news.length == 0) {
          this.isDataNewsEmpty = true;
          this.isDataNews = false;
        } else {
          this.isDataNews = false;
        }

        // ------ Si solo hay una cartelera disponible, entonces se ajusta la visualización
        // ------ del slide
        if (this.finalnews.length == 1) {
          this.oneNews = true;
        } else {
          this.oneNews = false;
        }
      }, error => {
        console.error(error);
        this.isDataNewsEmpty = true;
        this.isDataNews = false;
      })
  }

  viewDetailNews(billboard) {
    this.sharedService.setData(billboard);
    this.navCtrl.navigateRoot('/tabs/news/detail-news', { animated: true });
  }

  async neighbourProperty() {
    this.neighbourId = await this.storage.get('neighbourId')
    this.token = await this.storage.get('token')
    this.crudService.getModel(`neighbor/get/${this.neighbourId}`, this.token)
      .subscribe(async (response: GenericResponseModel) => {
        this.neighbourModel = response.genericObject.neighbor;
      }, error => {
        console.error(error);
        this.logOut();
        // this.presentToast('Tenemos problemas al encontrar tu información, por favor intentalo más tarde', 'toastLogin');
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

}
