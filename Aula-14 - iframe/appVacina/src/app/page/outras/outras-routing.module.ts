import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutrasPage } from './outras.page';

const routes: Routes = [
  {
    path: '',
    component: OutrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrasPageRoutingModule {}
