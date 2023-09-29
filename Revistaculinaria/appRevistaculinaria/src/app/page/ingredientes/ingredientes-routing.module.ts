import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientesPage } from './ingredientes.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientesPageRoutingModule {}
