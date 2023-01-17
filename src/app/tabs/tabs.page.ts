import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InBuildingComponent } from '../shared/components/in-building/in-building.component';
import { SharedService } from '../shared/services/shared-services/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( 
    public popoverController: PopoverController, private sharedService: SharedService
  ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: InBuildingComponent,
      cssClass: 'inBuilding',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  updateData() {
    // ------ Se envía el true para indicar que el usuario inicia el componente desde el menu
    this.sharedService.setData(true);
  }

}
