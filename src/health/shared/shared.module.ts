import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MealsService } from './services';
import { ListItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    ListItemComponent,
  ],
  exports: [
    ListItemComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MealsService,
      ],
    }
  }
}
