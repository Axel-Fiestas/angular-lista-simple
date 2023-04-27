import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  constructor() { }

  arrayAnimeList: Anime[]=[
    {
    name:"Clannad",
    genre:"Drama",
    year:2013
    },
    {
      name:"Pokemon",
      genre:"Action",
      year:2010
      }
  ]



  addAnime(newAnime:Anime){
    this.arrayAnimeList.push(newAnime)
  }

  deleteAnime(index:number){
    this.arrayAnimeList.splice(index,1)
  }

}
