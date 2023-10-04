import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddimagemPage } from './addimagem.page';

const routes: Routes = [
  {
    path: '',
    component: AddimagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddimagemPageRoutingModule {}
