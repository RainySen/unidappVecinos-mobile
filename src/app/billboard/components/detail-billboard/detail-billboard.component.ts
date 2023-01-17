import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-detail-billboard',
  templateUrl: './detail-billboard.component.html',
  styleUrls: ['./detail-billboard.component.scss'],
})
export class DetailBillboardComponent implements OnInit {

  billboard: any;
  isBillboard = false;

  constructor(
    private sharedService: SharedService, private navCtrl: NavController
  ) { }

  ngOnInit() {
    // ------ Se comprueba que lleguen los datos y en caso que no, se redirecciona para evitar
    // ------ que estalle la app
    if ( this.sharedService.getData() ) {
      this.billboard = this.sharedService.getData();
      console.log('bill', this.billboard);
      
      this.isBillboard = true;
    } else {
      this.navCtrl.navigateRoot('tabs/billboard/list', { animated: true });
    }
  }

  async openLink(url) {
    if (url.indexOf('http')  !== -1) {
      await Browser.open({ url: url });
    } else {
      await Browser.open({ url: `http://${url}` });
    }
  }


}
