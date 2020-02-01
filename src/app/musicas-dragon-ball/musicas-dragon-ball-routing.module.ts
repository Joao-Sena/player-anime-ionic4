import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasDragonBallPage } from './musicas-dragon-ball.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasDragonBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasDragonBallPageRoutingModule {}
