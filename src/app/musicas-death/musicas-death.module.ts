import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasDeathPageRoutingModule } from './musicas-death-routing.module';

import { MusicasDeathPage } from './musicas-death.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasDeathPageRoutingModule
  ],
  declarations: [MusicasDeathPage]
})
export class MusicasDeathPageModule {}
