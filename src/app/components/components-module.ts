import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MenuComponent,CabeceraComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[CabeceraComponent,MenuComponent]
})
export class ComponentsModule { }
