import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMundoPageRoutingModule } from './detalle-mundo-routing.module';

import { DetalleMundoPage } from './detalle-mundo.page';
import { ComponentsModule } from 'src/app/components/components-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetalleMundoPageRoutingModule
  ],
  declarations: [DetalleMundoPage]
})
export class DetalleMundoPageModule {}
