import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundosPageRoutingModule } from './mundos-routing.module';

import { MundosPage } from './mundos.page';
import { ComponentsModule } from 'src/app/components/components-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundosPageRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [MundosPage]
})
export class MundosPageModule {}
