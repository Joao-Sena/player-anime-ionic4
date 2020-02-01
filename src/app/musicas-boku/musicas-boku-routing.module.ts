import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasBokuPage } from './musicas-boku.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasBokuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasBokuPageRoutingModule {}
