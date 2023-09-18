import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutossPage } from './produtoss.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutossPageRoutingModule {}
