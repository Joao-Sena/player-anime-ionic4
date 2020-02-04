import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'musicas-boku',
    loadChildren: () => import('./musicas-boku/musicas-boku.module').then( m => m.MusicasBokuPageModule)
  },
  {
    path: 'musicas-dragon-ball',
    loadChildren: () => import('./musicas-dragon-ball/musicas-dragon-ball.module').then( m => m.MusicasDragonBallPageModule)
  },
  {
    path: 'musicas-kimetsu',
    loadChildren: () => import('./musicas-kimetsu/musicas-kimetsu.module').then( m => m.MusicasKimetsuPageModule)
  },
  {
    path: 'musicas-naruto',
    loadChildren: () => import('./musicas-naruto/musicas-naruto.module').then( m => m.MusicasNarutoPageModule)
  },
  {
    path: 'musicas-death',
    loadChildren: () => import('./musicas-death/musicas-death.module').then( m => m.MusicasDeathPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
