import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceulPageRoutingModule } from './acceul-routing.module';

import { AcceulPage } from './acceul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceulPageRoutingModule
  ],
  declarations: [AcceulPage]
})
export class AcceulPageModule {}
