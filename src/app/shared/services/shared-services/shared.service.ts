import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  objetModel: any;

  constructor() { }

  getData() {
    return this.objetModel;
  }

  setData(object: any) {
    this.objetModel = object;
  }
}
