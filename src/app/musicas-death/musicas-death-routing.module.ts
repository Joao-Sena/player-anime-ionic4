import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasDeathPage } from './musicas-death.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasDeathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasDeathPageRoutingModule {}
