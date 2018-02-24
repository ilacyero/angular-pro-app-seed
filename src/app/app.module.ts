import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
/**
 var config = {
    apiKey: "AIzaSyBP8PLexKqRfV7Xm8hST14oTXVtqVxLbTQ",
    authDomain: "fitness-app-bc86d.firebaseapp.com",
    databaseURL: "https://fitness-app-bc86d.firebaseio.com",
    projectId: "fitness-app-bc86d",
    storageBucket: "fitness-app-bc86d.appspot.com",
    messagingSenderId: "380858548649"
  };
 */
