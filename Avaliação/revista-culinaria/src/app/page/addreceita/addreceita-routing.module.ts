import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddreceitaPage } from './addreceita.page';

const routes: Routes = [
  {
    path: '',
    component: AddreceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddreceitaPageRoutingModule {}
