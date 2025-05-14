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
        length:51,
        remainingTime:51,
        imageURL:'',
        isPlaying:false,
      },
      {
        index:1,
        name:'Can Can',
        length:31,
        remainingTime:31,
        imageURL:'',
        isPlaying:false,

      },
      {
        index:2,
        name:'Happy birthday to you!',
        length:17,
        remainingTime:17,
        imageURL:'',
        isPlaying:false,

      },
      {
        index:3,
        name:'Jingle bells',
        length:29,
        remainingTime:29,
        imageURL:'',
        isPlaying:false,

      },

    ]
  }
}
