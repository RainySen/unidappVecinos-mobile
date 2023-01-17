import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesAuthorizationService } from '../../app/authorization/services/services-authorization.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private  authService: ServicesAuthorizationService, private navCtrl: NavController,
  ) {}

  canLoad(): boolean | Promise<boolean> | Observable<boolean> {
    if(this.authService.getCurrenUser()){
      return true;
   }
   else{
     this.navCtrl.navigateRoot(['/login']);
     return false;
   }
  }
  
}
