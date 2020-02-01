import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasKimetsuPage } from './musicas-kimetsu.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasKimetsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasKimetsuPageRoutingModule {}
