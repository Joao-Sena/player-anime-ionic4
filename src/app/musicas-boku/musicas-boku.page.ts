import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-musicas-boku',
  templateUrl: './musicas-boku.page.html',
  styleUrls: ['./musicas-boku.page.scss'],
})
export class MusicasBokuPage implements OnInit {

  public nomeMusica: string;

  constructor() { 
    this.nomeMusica = environment.nomeMusica;
   }

  ngOnInit() {
  }

  iniciarSom(musica: string, nome: string){
    
    if(this.nomeMusica == nome){
      environment.som.play();
    }else{
      environment.som.src = `../../assets/sons/${musica}.mp3` ;
      environment.som.load();
      environment.som.play();
      this.nomeMusica = nome;
      environment.nomeMusica = this.nomeMusica;
    }

  }

  pausarSom(){
    environment.som.pause();
  }

  iniciarSomFooter(){
    environment.som.play();
  }

}
