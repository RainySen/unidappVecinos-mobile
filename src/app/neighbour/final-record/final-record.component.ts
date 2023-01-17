import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, MenuController, IonSlides, IonContent, AlertController } from '@ionic/angular';
import { CRUDService } from 'src/app/shared/services/crud-service/crud.service';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { NeighbourModel } from 'src/utils/models/Neighbour.model';
import { Storage } from '@ionic/storage';
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

const { Camera } = Plugins;

@Component({
  selector: 'app-final-record',
  templateUrl: './final-record.component.html',
  styleUrls: ['./final-record.component.scss'],
})
export class FinalRecordComponent implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;
  @ViewChild(IonContent) content: IonContent;

  // ------ Actualización Vecino ------
  image: string;
  file: File;
  neighbourModel: NeighbourModel;
  neighbourForm: FormGroup;
  // ------ isLogin es para saber si se llega al componente desde el login para ocultar los botones de navegación
  // ------ que conectan con las demás páginas.
  isLogin: boolean = false;
  loading: any;
  sharedData: any;
  neighbourId: any;
  token: string;

  // ------ Actualización datos propiedad ------
  propertyNeighbour: any
  propertyForm: FormGroup;
  mostrarCuartoUtil: boolean = false;
  mostrarVehiculo: boolean = false;
  mostrarMascota: boolean = false;
  mostrarCelda: boolean = false;

  constructor(
    private navCtrl: NavController, private crudService: CRUDService,
    private loadingCtrl: LoadingController, private sharedService: SharedService,
    private toastCtrl: ToastController, private storage: Storage,
    private menuCrtl: MenuController, private platform: Platform,
    private sanitizer: DomSanitizer, private fireStorage: AngularFireStorage,
    private fb: FormBuilder, private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    if (this.sharedService.getData()) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }

    this.loadingLogin()
    this.neighbourProperty();
    this.dataNeighbour();

    // -----------  Formulario Validación Vecino -----------
    this.neighbourForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      numero_celular: new FormControl('', [Validators.required]),
      tipo_doc: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required])
    });


    // -----------  Formulario Validación Propiedad -----------
    this.propertyForm = this.fb.group({
      _id: [''],
      num_inmueble: ['', [Validators.required]],
      numero_fijo: [''],
      coeficiente: [''],
      cuartosUtiles: this.fb.array([]),
      vehiculos: this.fb.array([]),
      mascotas: this.fb.array([]),
      celdas: this.fb.array([]),
      id_establecimiento: ['']
    });

  }

  // ------ Slides ------

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  prevSlide() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
    this.content.scrollToTop();
  }

  // ------ Actualización de la información del Vecino ------

  async camera() {
    const result = await Camera.getPhoto({
      quality: 75,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      saveToGallery: true,
      correctOrientation: true
    });

    const images: any = this.sanitizer.bypassSecurityTrustResourceUrl(result && (result.base64String));;
    this.image = `data:image/jpeg;base64,${images.changingThisBreaksApplicationSecurity}`;
  }

  async librery() {
    const result = await Camera.getPhoto({
      quality: 75,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
      saveToGallery: true,
      correctOrientation: true
    });

    const images: any = this.sanitizer.bypassSecurityTrustResourceUrl(result && (result.base64String));;
    this.image = `data:image/jpeg;base64,${images.changingThisBreaksApplicationSecurity}`;
  }


  onFileChoose(event: Event) {
    this.file = (event.target as HTMLInputElement).files[0];

    const pattern = /image-*/;
    const reader = new FileReader();

    if (!this.file.type.match(pattern)) {
      return;
    }

    reader.onload = () => {
      this.image = reader.result.toString();
    };
    reader.readAsDataURL(this.file);

  }

  async uploadPicture() {
    this.loadingLogin();

    if (this.image) {
      let isBase64 = this.image.indexOf('data:image/jpeg;base64');
      if (isBase64 !== -1) {
        const filePath = 'vecinoInfo/' + await this.storage.get('neighbourPropertyId') + '/'
          + await this.storage.get('neighbourId') + 'pictureProfile';
        const fileRef = this.fireStorage.ref(filePath);
        fileRef.putString(this.image, 'data_url', { contentType: 'image/jpeg' }).then(() => {
          fileRef.getDownloadURL().subscribe(result => {
            this.saveData(result);
          });
        });
      } else {
        this.saveData(this.image);
      }
    } else {
      this.saveData('');
    }
  }

  async neighbourProperty() {
    this.neighbourId = await this.storage.get('neighbourId');
    this.token = await this.storage.get('token');

    // ------ Se envía el token para este servicio, ya que al guardarlo en el storage y después llamarlo,
    // ------ este no alcanza a llegar y la consulta queda mala.
    this.crudService.getModel(`neighbor/get/${this.neighbourId}`, this.token)
      .subscribe(async (response: GenericResponseModel) => {
        this.slides.lockSwipes(true);
        this.neighbourModel = response.genericObject.neighbor;
        this.image = this.neighbourModel.foto;
        // ----------- Se setean estos datos para que el usaurio los rectifique
        // ----------- ya que vienen llenos al registrarlo desde admin
        this.neighbourForm.controls.nombres.setValue(this.neighbourModel.nombres);
        this.neighbourForm.controls.apellidos.setValue(this.neighbourModel.apellidos);
        if (this.neighbourModel.identificacion) {
          this.neighbourForm.controls.numero_celular.setValue(this.neighbourModel.numero_celular);
          this.neighbourForm.controls.tipo_doc.setValue(this.neighbourModel.tipo_doc);
          this.neighbourForm.controls.identificacion.setValue(this.neighbourModel.identificacion);
          this.neighbourForm.controls.sexo.setValue(this.neighbourModel.sexo);
          this.neighbourForm.controls.fecha_nacimiento.setValue(this.neighbourModel.fecha_nacimiento);
        }
        this.loading.dismiss();
      }, error => {
        console.error(error);
        this.presentToast('Tenemos problemas al encontrar tu información, por favor intentalo más tarde', 'toastLogin');
      });
  }

  async saveData(imgFirebase: string) {
    // ----------- Se pasan datos del fromGroup al modelo para ser enviado -----------
    this.neighbourModel.nombres = this.neighbourForm.controls.nombres.value;
    this.neighbourModel.apellidos = this.neighbourForm.controls.apellidos.value;
    this.neighbourModel.numero_celular = this.neighbourForm.controls.numero_celular.value;
    this.neighbourModel.tipo_doc = this.neighbourForm.controls.tipo_doc.value;
    this.neighbourModel.identificacion = this.neighbourForm.controls.identificacion.value;
    this.neighbourModel.sexo = this.neighbourForm.controls.sexo.value;
    this.neighbourModel.fecha_nacimiento = this.neighbourForm.controls.fecha_nacimiento.value;
    this.neighbourModel.email = await this.storage.get('userEmail');
    this.neighbourModel.foto = imgFirebase;
    console.log('neighbourModel save data---', this.neighbourModel);

    this.crudService.postModel('neighbor/saveNeighbor', this.neighbourModel, await this.storage.get('token'))
      .subscribe((genericResponse: GenericResponseModel) => {
        const USER_NAME = this.neighbourForm.controls.nombres.value + ' ' + this.neighbourForm.controls.apellidos.value;
        this.storage.set('userName', USER_NAME);
        if (imgFirebase) {
          this.storage.set('userPicture', imgFirebase);
        }
        this.saveNeighbourProperty();
      }, error => {
        console.error(error);
        this.presentToast('Tenemos problemas al actualizar tu información, por favor intentalo más tarde', 'toastLogin');
      });
  }

  // ------ Actualización información inmueble vecino ------
  async saveNeighbourProperty() {
    if (!this.propertyForm.value.coeficiente) {
      this.propertyForm.value.coeficiente = "";
    }
    if (!this.propertyForm.value.numero_fijo) {
      this.propertyForm.value.numero_fijo = "";
    }
    console.log('saveNeighbourProperty', this.propertyForm.value);
    this.crudService.postModel('asset/saveAsset', this.propertyForm.value, await this.storage.get('token'))
      .subscribe((genericResponse: GenericResponseModel) => {
        this.presentToast('Información actualizada correctamente', 'success');
        this.navCtrl.navigateRoot('/tabs/home', { animated: true });
        this.loading.dismiss();
      }, error => {
        console.error(error);
        this.presentToast('Tenemos problemas al actualizar tu información, por favor intentalo más tarde', 'toastLogin');
      });
  }

  async dataNeighbour() {
    const neighbourPropertyId = await this.storage.get('neighbourPropertyId');
    const neighbourProperty = await this.storage.get('neighbourProperty');
    const estblishmentId = await this.storage.get('establishmentId');
    console.log('hpta token property', neighbourPropertyId);
    console.log('hpta token neighbourProperty', neighbourProperty);

    this.crudService.getModel(`asset/get/${neighbourPropertyId}`, await this.storage.get('token'))
      .subscribe(async (response: GenericResponseModel) => {
        console.log('response y toke', response, await this.storage.get('token'), await this.storage.get('establishmentId'));

        this.propertyNeighbour = response.genericObject;
        console.log('this.propertyNeighbour', this.propertyNeighbour);

        this.propertyForm.controls._id.setValue(this.propertyNeighbour._id);
        this.propertyForm.controls.coeficiente.setValue(this.propertyNeighbour.coeficiente);
        this.propertyForm.controls.id_establecimiento.setValue(this.propertyNeighbour.id_establecimiento);
        this.propertyForm.controls.num_inmueble.setValue(this.propertyNeighbour.num_inmueble);
        this.propertyForm.controls.numero_fijo.setValue(this.propertyNeighbour.numero_fijo);
        console.log('obteniendo los datos de propiedad en el form', this.propertyForm.value);

        setTimeout(() => {
          this.addCuartosUtilesArray();
        }, 30);

        setTimeout(() => {
          this.addvehiculoArray();
        }, 30);

        setTimeout(() => {
          this.addceldaArray();
        }, 30);

        setTimeout(() => {
          this.addmascotaArray();
        }, 30);

        setTimeout(() => {
        }, 30);
      }, error => {
        console.error(error);
      });
  }

  get cuartosUtiles() {
    return this.propertyForm.get('cuartosUtiles') as FormArray;
  }

  get vehiculo() {
    return this.propertyForm.get('vehiculos') as FormArray;
  }

  get mascota() {
    return this.propertyForm.get('mascotas') as FormArray;
  }

  get celda() {
    return this.propertyForm.get('celdas') as FormArray;
  }

  addCuartosUtilesArray() {
    if (this.propertyNeighbour.cuartosUtiles != null) {
      for (let i = 0; i < this.propertyNeighbour.cuartosUtiles.length; i++) {
        this.cuartosUtiles.push(
          this.fb.group({
            nomenclaturaCuartoUtil: [this.propertyNeighbour.cuartosUtiles[i].nomenclaturaCuartoUtil, [Validators.required]],
          })
        );
      }
    }
    if (this.cuartosUtiles.length > 0) {
      this.mostrarCuartoUtil = true;
    } else {
      this.mostrarCuartoUtil = false;
      // this.addCuartosUtiles();
    }
  }

  addvehiculoArray() {
    if (this.propertyNeighbour.vehiculos != null) {
      for (let i = 0; i < this.propertyNeighbour.vehiculos.length; i++) {
        this.vehiculo.push(
          this.fb.group({
            tipoVehiculo: [this.propertyNeighbour.vehiculos[i].tipoVehiculo, [Validators.required]],
            descripcion: [this.propertyNeighbour.vehiculos[i].descripcion, [Validators.required]]
          })
        );
      }
    }
    if (this.vehiculo.length > 0) {
      this.mostrarVehiculo = true;
    } else {
      this.mostrarVehiculo = false;
      // this.addvehiculo();
    }

  }

  addmascotaArray() {
    if (this.propertyNeighbour.mascotas != null) {
      for (let i = 0; i < this.propertyNeighbour.mascotas.length; i++) {
        this.mascota.push(
          this.fb.group({
            tipoMascota: [this.propertyNeighbour.mascotas[i].tipoMascota, [Validators.required]],
            descripcion: [this.propertyNeighbour.mascotas[i].descripcion, [Validators.required]]
          })
        );
      }
    }
    if (this.mascota.length > 0) {
      this.mostrarMascota = true;
    } else {
      this.mostrarMascota = false;
      // this.addmascota();
    }
  }

  addceldaArray() {
    if (this.propertyNeighbour.celdas != null) {
      for (let i = 0; i < this.propertyNeighbour.celdas.length; i++) {
        this.celda.push(
          this.fb.group({
            numero: [this.propertyNeighbour.celdas[i].numero, [Validators.required]]
          })
        );
      }
    }
    if (this.celda.length > 0) {
      this.mostrarCelda = true;
    } else {
      this.mostrarCelda = false;
      // this.addcelda();
    }
  }

  addCuartosUtiles() {
    this.cuartosUtiles.push(
      this.fb.group({
        nomenclaturaCuartoUtil: ['', [Validators.required]]
      })
    );
  }

  addvehiculo() {
    this.vehiculo.push(
      this.fb.group({
        tipoVehiculo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]]
      })
    );
  }

  addmascota() {
    this.mascota.push(
      this.fb.group({
        tipoMascota: ['', [Validators.required]],
        descripcion: ['', [Validators.required]]
      })
    );
  }

  addcelda() {
    this.celda.push(
      this.fb.group({
        numero: ['', [Validators.required]]
      })
    );
  }

  deleteCuartoUtil(index) {
    this.cuartosUtiles.removeAt(index);
  }

  deleteVehiculo(index) {
    this.vehiculo.removeAt(index);
  }

  deleteMascota(index) {
    this.mascota.removeAt(index);
  }

  deleteCelda(index) {
    this.celda.removeAt(index);
  }

  // ------ Recursos Usabilidad ------
  async loadingLogin() {
    this.loading = await this.loadingCtrl.create({
      spinner: null,
      message: '<img src="/assets/img/loading/load_triangle.gif">',
      translucent: true,
      cssClass: 'loading-login',
      backdropDismiss: true,
    });
    return await this.loading.present();
  }

  async presentToast(message, color) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      color,
      duration: 4000
    });
    toast.present();
  }

  toggleMenu() {
    this.menuCrtl.toggle();
  }

  async presentAlert(typeDelete, itemDelete, itemValue) {
    let message = '';
    switch (typeDelete) {
      case 'cuartoUtil':
        message = `¿Desea borrar el cuarto útil: ${itemValue.nomenclaturaCuartoUtil} ?`;
        break;

      case 'vehiculo':
        message = `¿Desea borrar el/la: ${itemValue.descripcion}`;
        break;

      case 'mascota':
        message = `¿Desea borrar el/la mascota: ${itemValue.descripcion}`;
        break;

      case 'parqueadero':
        message = `¿Desea borrar el/la parqueadero: ${itemValue.numero}`;
        break;

      default:
        break;
    }

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Aceptar',
          handler: () => {
            switch (typeDelete) {
              case 'cuartoUtil':
                this.deleteCuartoUtil(itemDelete)
                break;

              case 'vehiculo':
                this.deleteVehiculo(itemDelete)
                break;

              case 'mascota':
                this.deleteMascota(itemDelete)
                break;

              case 'parqueadero':
                this.deleteCelda(itemDelete)
                break;

              default:
                break;
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
