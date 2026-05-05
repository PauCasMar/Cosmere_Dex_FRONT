import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMundoPage } from './detalle-mundo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMundoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMundoPageRoutingModule {}
