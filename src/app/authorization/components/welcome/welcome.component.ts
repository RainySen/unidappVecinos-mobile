import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(
    private navCtrl: NavController, private menuCrtl: MenuController
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.menuCrtl.enable(false);
  }

  goLogin() {
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

}
