import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RestorePasswordComponent } from './components/restore-password/restore-password.component';

@NgModule({
  declarations: [
    LoginViewComponent, WelcomeComponent, RestorePasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AuthorizationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthorizationModule { }
