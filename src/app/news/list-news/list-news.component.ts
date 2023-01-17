import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CRUDService } from 'src/app/shared/services/crud-service/crud.service';
import { IonInfiniteScroll, MenuController, NavController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/services/shared-services/shared.service';
import { GenericResponseModel } from '../../../utils/models/Business.model';
import { BillboardsNewsModel } from '../../../utils/models/BillboardsNews.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss'],
})
export class ListNewsComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  colors = ['Blanco', 'Azul', 'Azul_Oscuro'];

  idDataNews = false;
  isData = true;
  establishmentId: any;
  news: BillboardsNewsModel[] = [];
  finalNews: BillboardsNewsModel[] = [];
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
      type: 'N',
      direction: 'des',
      direction_by: 'start_date'
    };
    this.crudService.getModel(`newsletter/getByType/${this.establishmentId}/${isNews.type}/${isNews.direction}`, await this.storage.get('token'))
      .subscribe((res: GenericResponseModel) => {
        this.news = res.genericObject;
        console.log('dataNEws', this.news);

        // ------ Se usan las 2 variables para organizar la secuencia de colores que
        // ------ se aprecia en la vista
        let j = 0;
        let k = 0;
        for (let l in this.news) {

          if (k <= 2) {
            if (j === 0 && k === 1) {
              j = 1;
            }
            this.news[l].color = this.colors[j]
            j++;
          } else if (k >= 3) {
            if (k === 3) {
              j = 2;
            }
            j--;
            this.news[l].color = this.colors[j];
            if (j === 0) {
              k = 0;
            }
          }
          k++;
        }

        let myBillboards = this.paginateBillboards();

        if (this.news.length == 0) {
          this.idDataNews = true;
          this.isData = false;
        } else {
          this.isData = false;
        }

        if (this.flag) {
          // ----- Si la bandera es TRUE, significa que el usurio recarga o refresca la consulta que trae
          // ----- el listado de las noticias, entonces se debe de reiniciar el arreglo newsFinal (que contiene el listado
          // ----- que se muestra en el HTML) para que se reinicie el listado y evitar se concatene el listado existente con
          // ----- el nuevo listado que se trae al referescar la consulta
          this.finalNews = [];
        }
        // let algo: BillboardsNewsModel[] = [];
        this.finalNews.push(...myBillboards);
      });
  }

  viewDetail(billboard) {
    this.sharedService.setData(billboard);
    this.navCtrl.navigateRoot('/tabs/news/detail-news', { animated: true });
  }

  toggleMenu() {
    this.menuCrtl.toggle();
  }

  loadData(event) {

    setTimeout(() => {

      if (this.finalNews.length >= this.news.length) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      this.pageNumber++;
      const myBillboards = this.paginateBillboards();
      this.finalNews.push(...myBillboards);

      this.infiniteScroll.complete();
    }, 1500);
  }

  // ----------- Paginador para infinite scroll -----------
  paginateBillboards() {
    return this.news.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.pageNumber = 1;
      this.infiniteScroll.disabled = false;
      this.flag = true;
      this.getBillboards();
      event.target.complete();
    }, 1500);
  }

}
