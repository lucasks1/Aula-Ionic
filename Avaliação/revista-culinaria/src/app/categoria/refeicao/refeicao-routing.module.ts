import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefeicaoPage } from './refeicao.page';

const routes: Routes = [
  {
    path: '',
    component: RefeicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefeicaoPageRoutingModule {}
