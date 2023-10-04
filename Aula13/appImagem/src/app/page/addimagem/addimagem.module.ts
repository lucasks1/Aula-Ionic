import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddimagemPageRoutingModule } from './addimagem-routing.module';

import { AddimagemPage } from './addimagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddimagemPageRoutingModule
  ],
  declarations: [AddimagemPage]
})
export class AddimagemPageModule {}
