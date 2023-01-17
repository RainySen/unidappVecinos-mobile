import { Component, OnInit, ViewChild } from '@angular/core';
import { CRUDService } from 'src/app/shared/services/crud-service/crud.service';
import { IonInfiniteScroll, MenuController, NavController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { BillboardsNewsModel } from 'src/utils/models/BillboardsNews.model';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list-billboard',
  templateUrl: './list-billboard.component.html',
  styleUrls: ['./list-billboard.component.scss'],
})
export class ListBillboardComponent implements OnInit {

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  idDataBillboard = false;
  isData = true;
  establishmentId: any;
  billboards: [] = [];
  finalBillboards: BillboardsNewsModel[] = [];
  flag = false;
  limitDesc = 140;
  limitTitle = 40;

  // ------- Se inicia en 2 el pageNumber para que cargue la primera cartelera... ya que si se empieza desde el 1,
  // ------- se mostrara primero la 3 cartelera y después seguira con la 2da cartelera y se reperita la 3ra cartelera
  // ------- en esta posición.... de tal forma que se perdería la 1ra cartelera
  pageNumber = 1;
  pageCount = 1;
  pageSize = 4;

  constructor(
    private crudService: CRUDService, private navCtrl: NavController,
    private sharedService: SharedService, private menuCrtl: MenuController,
    private storage: Storage
  ) { }

  async ngOnInit() {
    this.establishmentId = await this.storage.get('establishmentId');
    this.getBillboards();
  }

  async getBillboards() {
    const isNews = {
      type: 'C',
      direction: 'des',
      direction_by: 'start_date'
    };
    this.crudService.getModel(`newsletter/getByType/${this.establishmentId}/${isNews.type}/${isNews.direction}`, await this.storage.get('token'))
      .subscribe((res: GenericResponseModel) => {
        console.log('las carteleras', res.genericObject);
        console.log('las carteleras 2', res.genericObject[0].images[0].image);

        this.billboards = res.genericObject;
        let myBillboards = this.paginateBillboards();
        if (this.billboards.length == 0) {
          this.idDataBillboard = true;
          this.isData = false;
        } else {
          this.isData = false;
        }
        if (this.flag) {
          // ----- Si la bandera es TRUE, significa que el usurio recarga o refresca la consulta que trae
          // ----- el listado de las noticias, entonces se debe de reiniciar el arreglo newsFinal (que contiene el listado
          // ----- que se muestra en el HTML) para que se reinicie el listado y evitar se concatene el listado existente con
          // ----- el nuevo listado que se trae al referescar la consulta
          this.finalBillboards = [];
        }
        this.finalBillboards.push(...myBillboards);
      });
  }

  viewDetail(billboard) {
    this.sharedService.setData(billboard);
    this.navCtrl.navigateRoot('/tabs/billboard/detail-billboard', { animated: true });
  }

  toggleMenu() {
    this.menuCrtl.toggle();
  }

  loadData(event) {

    setTimeout(() => {

      if (this.finalBillboards.length >= this.billboards.length) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      this.pageNumber++;
      const myBillboards = this.paginateBillboards();
      this.finalBillboards.push(...myBillboards);

      this.infiniteScroll.complete();
    }, 1500);
  }

  // ----------- Paginador para infinite scroll -----------
  paginateBillboards() {
    return this.billboards.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
  }

  // ----------- Método que refresca o recarga la consulta de listar carteleras -----------
  doRefresh(event) {
    setTimeout(() => {
      console.log('mi bandera...', this.flag);
      this.pageNumber = 1;
      this.infiniteScroll.disabled = false;
      this.flag = true;
      console.log('mi bandera...', this.flag);
      this.getBillboards();
      event.target.complete();
    }, 1500);
  }

}
