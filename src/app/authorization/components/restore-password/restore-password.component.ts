import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, LoadingController, MenuController } from '@ionic/angular';
import { ServicesAuthorizationService } from '../../services/services-authorization.service';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
})
export class RestorePasswordComponent implements OnInit {

  restore: FormGroup;

  message: string;
  loading: any;
  responsesLogin = {
    header: '',
    message: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private menuCrtl: MenuController,
    public authService: ServicesAuthorizationService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.restore = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]{2,6})')]]
    });
  }

  ionViewWillEnter() {
    this.menuCrtl.enable(false);
  }

  restorePassword() {
    this.authService.restorePassword(this.restore.value).subscribe((Response: GenericResponseModel) => {
      console.log('recuperar contraseña', Response);
      if (Response) {
        // const emailUser = Response.genericObject.user.email;
        console.log(JSON.stringify('Restore password -----------'));
       
        
        this.message = Response.answer;
        this.responsesLogin = this.responseMessagesLogin(Response.code);
        this.presentToast(this.responsesLogin.message, 'toastSuccess');
      }
    }, error => {
      if (error.error.code === 400) {
        // ------ credenciales incorrectas
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message, 'toastLogin');
      }
      if (error.error.code === 401) {
        // ------ login correcto usuario bloqueado
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message, 'toastLogin');
      }
      if (error.error.code === 403) {
        // ------ bloqueado por intentos
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message, 'toastLogin');
      }
      if (error.error.code === 405) {
        // ------ Usuario no existe
        this.message = error.answer;
        this.responsesLogin = this.responseMessagesLogin(error.error.code);
        this.presentToast(this.responsesLogin.message, 'toastLogin');
      }
    });
  }

  responseMessagesLogin(code) {
    // ------ respuesta por defecto con respuesta CODE: 400
    let message: any = `<b>No existe un usuario registrado con el correo ingresado. Intentalo nuevamente</b>`;
    
    switch (code) {

      case 200:
        message = `<b>¡Revisa tu correo electrónico!</b> <br />Te hemos enviado un mensaje para que puedas restablecer tu contraseña.`;
        break;

      default:
      break;
    }

    this.responsesLogin.message = message;

    return this.responsesLogin;
  }

  async presentToast(message, colorMessage) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      // ------ el color es personalizado y se encuentra en: theme/variable.scss
      color: colorMessage,
      duration: 7000
    });
    toast.present();
  }

}
