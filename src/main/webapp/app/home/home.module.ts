import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Csci4211SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Csci4211SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Csci4211HomeModule {}
