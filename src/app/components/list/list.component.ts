import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anime } from 'src/app/models/anime.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  emisor:EventEmitter<number>=new EventEmitter()

  @Input()
  arrayAnime: Anime[]=[
    {
    name:"Chainsaw Man",
    genre:"Action",
    year:2022
    }
  ]

  constructor(){}


  emisorDelete(index:number){
    this.emisor.emit(index)
  }


}
