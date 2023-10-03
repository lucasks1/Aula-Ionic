import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefeicaoPageRoutingModule } from './refeicao-routing.module';

import { RefeicaoPage } from './refeicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefeicaoPageRoutingModule
  ],
  declarations: [RefeicaoPage]
})
export class RefeicaoPageModule {}
