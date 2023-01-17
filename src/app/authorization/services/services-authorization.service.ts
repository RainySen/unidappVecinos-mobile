import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';
import { GenericResponseModel } from 'src/utils/models/Business.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicesAuthorizationService {

  constructor(
    private http: HttpClient, private storage: Storage
    ) { }

    postCredentials(credential): Observable<GenericResponseModel> {
      return this.http.post<GenericResponseModel>(environment.url + environment.autenticacion, credential);
    }

    restorePassword(user): Observable<GenericResponseModel> {
      return this.http.post<GenericResponseModel>(environment.url + environment.restorePassword, user);
    }

    getUsers(): Observable<any[]>{
      return this.http.get<any>(environment.url + environment.usuarios);
    }

    async getCurrenUser(): Promise<boolean>{
      const userString = await this.storage.get('token');
      if (!isNullOrUndefined(userString)) {
        return true;
      } else {
        return false;
      }
    }

    getModel(path, token): Observable<GenericResponseModel>{
      // ------- Se crea un objeto de tipo HttpHeaders para que resiva el token desde la consulta y no desde
      // ------- localStorage, ya que el token no alcanzaba a llegar
      const myHeader = {
        headers : new HttpHeaders({
          Authorization: `Bearer ${ token }`
        })
      };
      return this.http.get<any>(environment.url + path, { headers: myHeader.headers });
    }
}
