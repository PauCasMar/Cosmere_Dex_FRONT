import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLibroPageRoutingModule } from './detalle-libro-routing.module';

import { DetalleLibroPage } from './detalle-libro.page';
import { ComponentsModule } from 'src/app/components/components-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetalleLibroPageRoutingModule
  ],
  declarations: [DetalleLibroPage]
})
export class DetalleLibroPageModule {}
