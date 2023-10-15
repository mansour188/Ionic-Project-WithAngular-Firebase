import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SginInPage } from './sgin-in.page';

const routes: Routes = [
  {
    path: '',
    component: SginInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SginInPageRoutingModule {}
