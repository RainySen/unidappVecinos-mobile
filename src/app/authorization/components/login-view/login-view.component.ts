import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServicesAuthorizationService } from '../../services/services-authorization.service';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { CredentialsModel } from 'src/utils/models/User.model';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { Storage } from '@ionic/storage';

import firebase from 'firebase';
import 'firebase/firestore';

import { Capacitor } from '@capacitor/core';
import { NeighbourModel } from 'src/utils/models/Neighbour.model';
import { FcmService } from 'src/app/notifications/services/fcm.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  neighbourModel: NeighbourModel;

  loading: any;
  respuesta: any[];
  credentials: CredentialsModel;
  credenciales: FormGroup;
  message: string;
  firebaseToken: any;
  dbFirestore: any;

  tokenNotification = {
    establishmentId: '',
    userId: '',
    propertyId: '',
    tokenFirebase: ''
  }

  responsesLogin = {
    header: '',
    message: ''
  };

  // ------ Se usa para mostrar u ocultar la contraseña en el momento que el usaurio la escribe
  // ------ para loguearse en la app
  inputType = 'password';

  // ------ Se almacena el token en esta variable para ser enviado en los servicios... ya que para hacer las consultas
  // ------ el token no se logra guardar y obtenerce del storage nativo, antes de que se hayan hecho las peticiones
  token: any;

  constructor(
    public authService: ServicesAuthorizationService, private navCtrl: NavController,
    private formBuilder: FormBuilder, private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, private menuCrtl: MenuController,
    private sharedService: SharedService, private storage: Storage,
    private fcmService: FcmService, private dbFirebase: AngularFireDatabase
  ) {
    this.dbFirestore = firebase.firestore();
  }

  ngOnInit() {
    this.userLoggedIn();
    this.credenciales = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
      password: ['', [Validators.required]]
      // ------- Credentials Prod ------
      // username: ['nathalya.nany@gmail.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
      // password: ['qwe123**', [Validators.required]]
      // username: ['tobby.warner@pebih.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
      // password: ['B0gjCh7PiO', [Validators.required]]
      // ------- Credentials Dev ------
      // username: ['juan.aguilar@desarrolloef.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]],
      // password: ['qwe123**', [Validators.required]]
    });
  }

  ionViewWillEnter() {
    this.menuCrtl.enable(false);
  }

  async loadingLogin() {
    // ------ se usa el loading propio de la app y se edita la visualización por medio del global.scss
    this.loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading/load_triangle.gif">',
      translucent: true,
      cssClass: 'loading-login',
      backdropDismiss: false,
      showBackdrop: true
    });
    return await this.loading.present();
  }

  login() {
    this.loadingLogin();

    this.authService.postCredentials(this.credenciales.value).subscribe((response: GenericResponseModel) => {
      if (response) {
        this.tokenNotification.userId = response.genericObject.user._id;
        this.token = response.genericObject.token;
        this.storage.set('token', response.genericObject.token);
        this.storage.set('userId', response.genericObject.user._id);
        this.storage.set('userName', response.genericObject.user.nombre);
        this.storage.set('userEmail', response.genericObject.user.email);
        this.getUserRol(response.genericObject.user._id);
      }
    }, error => {
      if (error.error.code === 400) {
        // ------ credenciales incorrectas
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(Number(error.error.genericObject.attemps));
        this.presentToast(this.responsesLogin.message);
        this.loading.dismiss();
      }
      if (error.error.code === 401) {
        // ------ login correcto usuario bloqueado
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message);
        this.loading.dismiss();
      }
      if (error.error.code === 403) {
        // ------ bloqueado por intentos
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message);
        this.loading.dismiss();
      }
      if (error.error.code === 405) {
        // ------ Usuario no existe
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message);
        this.loading.dismiss();
      }
      this.loading.dismiss();
    });
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      // ------ el color es personalizado y se encuentra en: theme/variable.scss
      color: 'toastLogin',
      duration: 7000
    });
    toast.present();
  }

  responseMessagesLogin(attemps) {
    // ------ respuesta por defecto en los primeros 3 intentos con respuesta CODE: 400
    let message: any = `<b>¿Tienes problemas para ingresar?</b> <br>Nosotros te ayudamos a recordar la contraseña si depronto se te olvidó ;) <br> Si no es el caso, porfa verifica los datos e intenta de nuevo.`;

    switch (attemps) {
      // ------ Cuarto (4) intento fallido con respuesta CODE: 400
      case 4:
        message = `<b>(turututuru música de suspenso) te queda una sola vida!!!</b> <br>Si no copias bien la info en los campos de usuario o contraseña, te vas directo al mundo del bloqueo O_o`;
        break;
      // ------ Respuesta del CODE: 401
      case 401:
        message = '<b>No puede ingresar al sistema</b> <br>Su cuenta ha sido bloqueada';
        break;
      // ------ Respuesta del CODE: 403
      case 403:
        message = `<b>¡Houston! Poseemos problemas *_*</b> <br>Por tu seguridad, tuvimos que bloquear tu usuario por intentos fallidos al entrar... <br />pero no te preocupes, comunicate con tu agente y él te ayudará a solucionar este inconveniente ;)`;
        break;
      // ------ Respuesta del CODE: 405
      case 405:
        message = `<b>¡Houston! Poseemos problemas *_*</b> <br>Parece que no estas registrado con nosotros
                  <br />contactanos y empieza a utilizar nuestros servicios`;
        break;

      default:
        break;
    }
    this.responsesLogin.message = message;

    return this.responsesLogin;
  }

  viewPassword() {
    this.inputType = (this.inputType === 'text') ? 'password' : 'text';
  }

  goRestorePassword() {
    this.navCtrl.navigateRoot('/restore-password', { animated: true });
  }

  // ------ Se consulta el rol del usuario logueado para saber si es Vecino y pedirle que termine de llenar
  // ------ la información en caso de ingresar por primera vez en la app
  getUserRol(userId) {
    // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
    // ------ este no alcanza a llegar y la consulta queda mala.
    this.authService.getModel(`user/getRole`, this.token)
      .subscribe((response: GenericResponseModel) => {

        this.storage.set('userRol', response.genericObject.nom_rol);
        if (response.genericObject.nom_rol === 'Vecino') {
          this.dataNeighbour(userId);
        } else {
          this.presentToast('Lo sentimos, pero en este momento no posees permiso para ingresar a la app');
          this.loading.dismiss();
        }
      }, error => {
        console.error(error);
        // this.presentToast('Tenemos problemas, por favor comprueba tu conexión a internet o intentalo más tarde');
      });
  }

  dataNeighbour(idUser) {
    // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
    // ------ este no alcanza a llegar y la consulta queda mala.
    this.authService.getModel(`neighbor/getByUserId/${idUser}`, this.token)
      .subscribe((response: GenericResponseModel) => {

        this.storage.set('neighbourId', response.genericObject._id);
        this.neighbourProperty(response.genericObject._id);
      }, error => {
        console.error(error);
      });
  }

  // ------ Este metodo se usa para obtener el inmueble (propiedad) del vecino ------
  async neighbourProperty(neighbourId) {
    // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
    // ------ este no alcanza a llegar y la consulta queda mala.
    this.authService.getModel(`neighbor/get/${neighbourId}`, this.token)
      .subscribe(async (response: GenericResponseModel) => {

        if (response.genericObject.assetList[0]) {
          this.storage.set('neighbourProperty', response.genericObject.assetList[0].num_inmueble);
          this.storage.set('neighbourPropertyId', response.genericObject.assetList[0]._id);
          this.tokenNotification.propertyId = response.genericObject.assetList[0]._id;
        }

        this.sharedService.setData(false);
        this.tokenNotification.establishmentId = response.genericObject.neighbor.id_establishment;

        this.dbFirebase
          .list(`/UsersTokenMovile/${this.tokenNotification.establishmentId}/${this.tokenNotification.propertyId}`)
          .set(this.tokenNotification.userId, await localStorage.getItem('firebaseToken'));

        // ------ Si el usuario ingresa por primera vez a la plataforma, sera dirigido a un formulario para que termine
        // ------ de completar los datos, en caso de que el usuario ya haya realizado esto, simplemente es dirigido al home
        if (response.genericObject.neighbor.identificacion == null) {
          this.navCtrl.navigateRoot('/neighbour', { animated: true });
          this.loading.dismiss();
        } else {
          this.navCtrl.navigateRoot('/tabs/home', { animated: true });
          this.loading.dismiss();
        }
      }, error => {
        console.error(error);
        this.presentToast('Tenemos problemas al encontrar tu información, por favor intentalo más tarde');
      });
  }

  async userLoggedIn() {
    this.loadingLogin();
    // ------ Se verifica si el usuario no ha cerrado sesión para saber
    // ------ se debe loguearse nuevamente
    let isToke = await this.storage.get('token');
    let isUserId = await this.storage.get('token');
    let firestoreToken = await localStorage.getItem('firebaseToken');
    if (isToke && isUserId && firestoreToken) {
      this.navCtrl.navigateRoot('/tabs/home', { animated: true });
    } else {
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
    }
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }
  
}
