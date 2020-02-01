import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasKimetsuPageRoutingModule } from './musicas-kimetsu-routing.module';

import { MusicasKimetsuPage } from './musicas-kimetsu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasKimetsuPageRoutingModule
  ],
  declarations: [MusicasKimetsuPage]
})
export class MusicasKimetsuPageModule {}
