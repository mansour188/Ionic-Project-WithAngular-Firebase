import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SginInPageRoutingModule } from './sgin-in-routing.module';

import { SginInPage } from './sgin-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SginInPageRoutingModule
  ],
  declarations: [SginInPage]
})
export class SginInPageModule {}
