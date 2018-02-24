import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third pary libraries
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    ]
  }
];

export const  firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBP8PLexKqRfV7Xm8hST14oTXVtqVxLbTQ",
  authDomain: "fitness-app-bc86d.firebaseapp.com",
  databaseURL: "https://fitness-app-bc86d.firebaseio.com",
  projectId: "fitness-app-bc86d",
  storageBucket: "fitness-app-bc86d.appspot.com",
  messagingSenderId: "380858548649"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
  ]
})
export class AuthModule { }
