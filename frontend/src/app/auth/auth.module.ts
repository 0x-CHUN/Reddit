import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AppModule} from "../app.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppModule,
    RouterModule
  ]
})
export class AuthModule {
}
