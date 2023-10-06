import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprodutoPage } from './addproduto.page';

const routes: Routes = [
  {
    path: '',
    component: AddprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprodutoPageRoutingModule {}
