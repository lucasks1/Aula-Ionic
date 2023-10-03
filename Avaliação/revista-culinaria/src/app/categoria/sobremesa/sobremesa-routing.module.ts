import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobremesaPage } from './sobremesa.page';

const routes: Routes = [
  {
    path: '',
    component: SobremesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobremesaPageRoutingModule {}
