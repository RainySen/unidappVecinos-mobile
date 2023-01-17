import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { CRUDService } from 'src/app/shared/services/crud-service/crud.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  loading: any;

  changePass: FormGroup;
  lisTokens = [];

  // ------ Se usa para mostrar u ocultar la contraseña en el momento que el usaurio la escribe
  // ------ para loguearse en la app
  typeOldPass = 'password';
  typeNewPass = 'password';

  constructor(
    private menuCrtl: MenuController, private crudService: CRUDService,
    private storage: Storage, private alertController: AlertController,
    private loadingCtrl: LoadingController, private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.changePass = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]]
    });
  }

  toggleMenu() {
    this.menuCrtl.toggle();
  }

  async changePassword() {
    this.loadingLogin();
    this.crudService.postModel('/user/changePassword', this.changePass.value,  await this.storage.get('token'))
    .subscribe(res => {
      this.alertInfo('', res.answer);
      this.loading.dismiss();
      this.changePass.get('oldPassword').setValue('');
      this.changePass.get('newPassword').setValue('');
      this.navCtrl.navigateRoot('/tabs/home', { animated: true });
    }, err => {
      this.loading.dismiss();
      this.alertInfo('Upps!', err.error.answer);
      this.changePass.get('oldPassword').setValue('');
      this.changePass.get('newPassword').setValue('');
    });
  }

  viewOldPassword() {
    this.typeOldPass = (this.typeOldPass === 'text') ? 'password' : 'text';
  }

  viewNewPassword() {
    this.typeNewPass = (this.typeNewPass === 'text') ? 'password' : 'text';
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

  async alertInfo( header: string, message: string ) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
