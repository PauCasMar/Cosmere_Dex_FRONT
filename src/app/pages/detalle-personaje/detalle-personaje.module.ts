import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePersonajePageRoutingModule } from './detalle-personaje-routing.module';

import { DetallePersonajePage } from './detalle-personaje.page';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetallePersonajePageRoutingModule
  ],
  declarations: [DetallePersonajePage]
})
export class DetallePersonajePageModule {}
