import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescricaoPage } from './descricao.page';

const routes: Routes = [
  {
    path: '',
    component: DescricaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescricaoPageRoutingModule {}
