import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparoPage } from './preparo.page';

const routes: Routes = [
  {
    path: '',
    component: PreparoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparoPageRoutingModule {}
