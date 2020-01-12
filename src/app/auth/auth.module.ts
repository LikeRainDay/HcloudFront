import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RequestPasswordComponent} from './request-password/request-password.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ResetPasswordComponent,
    RequestPasswordComponent],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule {
}
