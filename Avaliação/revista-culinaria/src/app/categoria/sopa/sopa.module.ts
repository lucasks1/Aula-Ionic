import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SopaPageRoutingModule } from './sopa-routing.module';

import { SopaPage } from './sopa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SopaPageRoutingModule
  ],
  declarations: [SopaPage]
})
export class SopaPageModule {}
