import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacinacaoPageRoutingModule } from './vacinacao-routing.module';

import { VacinacaoPage } from './vacinacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacinacaoPageRoutingModule
  ],
  declarations: [VacinacaoPage]
})
export class VacinacaoPageModule {}
