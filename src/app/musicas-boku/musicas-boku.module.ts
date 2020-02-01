import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasBokuPageRoutingModule } from './musicas-boku-routing.module';

import { MusicasBokuPage } from './musicas-boku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasBokuPageRoutingModule
  ],
  declarations: [MusicasBokuPage]
})
export class MusicasBokuPageModule {}
