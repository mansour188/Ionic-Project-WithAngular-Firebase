import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceulPage } from './acceul.page';

const routes: Routes = [
  {
    path: '',
    component: AcceulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceulPageRoutingModule {}
