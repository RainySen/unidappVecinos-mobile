import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss'],
})
export class DetailNewsComponent implements OnInit {

  news: any;
  isNews = false;

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  constructor(
    private sharedService: SharedService, private navCtrl: NavController
  ) { }

  ngOnInit() {
    // ------ Se comprueba que lleguen los datos y en caso que no, se redirecciona para evitar
    // ------ que estalle la app
    if ( this.sharedService.getData() ) {
      this.news = this.sharedService.getData();
      console.log('this.news', this.news);

      this.isNews = true;
    } else {
      this.navCtrl.navigateRoot('tabs/news/list', { animated: true });
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
