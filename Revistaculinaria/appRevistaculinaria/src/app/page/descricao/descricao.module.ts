import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescricaoPageRoutingModule } from './descricao-routing.module';

import { DescricaoPage } from './descricao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescricaoPageRoutingModule
  ],
  declarations: [DescricaoPage]
})
export class DescricaoPageModule {}
