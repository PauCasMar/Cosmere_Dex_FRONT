import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MundosPage } from './mundos.page';

const routes: Routes = [
  {
    path: '',
    component: MundosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MundosPageRoutingModule {}
