import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasNarutoPage } from './musicas-naruto.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasNarutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasNarutoPageRoutingModule {}
