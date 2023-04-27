import { Component } from '@angular/core';
import { Anime } from 'src/app/models/anime.model';
import { AnimeServiceService } from '../service/anime-service.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private serviciosAnime:AnimeServiceService){}


  getAnimeList(){
    return this.serviciosAnime.arrayAnimeList
  }

  addAnimeList(anime:Anime){
    this.serviciosAnime.addAnime(anime)
  }

  deleteAnimeList(index:number){
    this.serviciosAnime.deleteAnime(index)
  }


}
