import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrasPageRoutingModule } from './outras-routing.module';

import { OutrasPage } from './outras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrasPageRoutingModule
  ],
  declarations: [OutrasPage]
})
export class OutrasPageModule {}
