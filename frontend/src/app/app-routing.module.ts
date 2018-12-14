import { SignupComponent } from './components/password/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'request-password-reset', component: RequestResetComponent
  },
  {
    path: 'response-password-reset', component: ResponseResetComponent
  }
];


@NgModule({

  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
