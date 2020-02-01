import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasNarutoPageRoutingModule } from './musicas-naruto-routing.module';

import { MusicasNarutoPage } from './musicas-naruto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasNarutoPageRoutingModule
  ],
  declarations: [MusicasNarutoPage]
})
export class MusicasNarutoPageModule {}
