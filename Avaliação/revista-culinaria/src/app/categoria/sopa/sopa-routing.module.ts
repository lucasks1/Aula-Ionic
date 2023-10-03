import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SopaPage } from './sopa.page';

const routes: Routes = [
  {
    path: '',
    component: SopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SopaPageRoutingModule {}
