import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefinePageRoutingModule } from './redefine-routing.module';

import { RedefinePage } from './redefine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedefinePageRoutingModule
  ],
  declarations: [RedefinePage]
})
export class RedefinePageModule {}
