import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(
    private http: HttpClient, private storage: Storage
  ) { }

  getModel(path, token): Observable<GenericResponseModel>{
    const myHeader = {
        headers : new HttpHeaders({
          Authorization: `Bearer ${ token }`
        })
      };
    return this.http.get<any>(environment.url + path, myHeader);
  }

  public postModel(path, model, token): Observable<any> {
    const myHeader = {
      headers : new HttpHeaders({
        Authorization: `Bearer ${ token }`
      })
    };
    return this.http.post<any>(environment.url + path, model, myHeader);
  }
}
