import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobremesaPageRoutingModule } from './sobremesa-routing.module';

import { SobremesaPage } from './sobremesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobremesaPageRoutingModule
  ],
  declarations: [SobremesaPage]
})
export class SobremesaPageModule {}
