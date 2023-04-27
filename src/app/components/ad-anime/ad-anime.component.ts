import { Component, EventEmitter, Output } from '@angular/core';
import { Anime } from '../../models/anime.model';

@Component({
  selector: 'app-ad-anime',
  templateUrl: './ad-anime.component.html',
  styleUrls: ['./ad-anime.component.css']
})
export class AdAnimeComponent {

  @Output()
  public emisor: EventEmitter<Anime>=new EventEmitter()

  public newAnime: Anime={
    name:"",
    genre:"",
    year:0,
  }


  emitAnime():void{
    if(this.newAnime.name.length===0)return;
    const Anime={...this.newAnime}
    this.emisor.emit(Anime)
  }

}
