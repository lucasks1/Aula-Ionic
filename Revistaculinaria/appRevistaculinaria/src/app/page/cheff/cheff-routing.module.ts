import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheffPage } from './cheff.page';

const routes: Routes = [
  {
    path: '',
    component: CheffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheffPageRoutingModule {}
