import { Injectable } from '@angular/core';
import { Zene } from '../../shared/models/zene/zene';
@Injectable({
  providedIn: 'root'
})
export class ZenekService {

  constructor() { }

  getAll():Zene[]{
    return[
      {
        index:0,
        name:'Ciao Bella',
        length:60,
        remainingTime:60,
        imageURL:'',
        isPlaying:false,
      },
      {
        index:1,
        name:'Can Can',
        length:35,
        remainingTime:35,
        imageURL:'',
        isPlaying:false,

      },
      {
        index:2,
        name:'Happy birthday to you!',
        length:80,
        remainingTime:80,
        imageURL:'',
        isPlaying:false,

      },
      {
        index:3,
        name:'Jingle bells',
        length:60,
        remainingTime:60,
        imageURL:'',
        isPlaying:false,

      },

    ]
  }
}
