import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasDragonBallPageRoutingModule } from './musicas-dragon-ball-routing.module';

import { MusicasDragonBallPage } from './musicas-dragon-ball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasDragonBallPageRoutingModule
  ],
  declarations: [MusicasDragonBallPage]
})
export class MusicasDragonBallPageModule {}
