import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicas-naruto',
  templateUrl: './musicas-naruto.page.html',
  styleUrls: ['./musicas-naruto.page.scss'],
})
export class MusicasNarutoPage implements OnInit {

  public som = new Audio();
  public nomeMusica: string;

  constructor() { }

  ngOnInit() {
  }

  iniciarSom(musica: string, nome: string){
    
    if(this.nomeMusica == nome){
      this.som.play();
    }else{
      this.som.src = `../../assets/sons/${musica}.mp3` ;
      this.som.load();
      this.som.play();
      this.nomeMusica = nome;
    }

  }

  pausarSom(){
    this.som.pause();
  }

  ngOnDestroy(){
    this.som.pause();
  }

}
