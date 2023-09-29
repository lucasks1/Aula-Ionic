import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientesPageRoutingModule } from './ingredientes-routing.module';

import { IngredientesPage } from './ingredientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientesPageRoutingModule
  ],
  declarations: [IngredientesPage]
})
export class IngredientesPageModule {}
