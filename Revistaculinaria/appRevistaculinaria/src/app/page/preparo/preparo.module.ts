import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreparoPageRoutingModule } from './preparo-routing.module';

import { PreparoPage } from './preparo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreparoPageRoutingModule
  ],
  declarations: [PreparoPage]
})
export class PreparoPageModule {}
