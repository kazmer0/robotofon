import { Component } from '@angular/core';
import { Zene } from '../../app/shared/models/zene/zene';
import { ZenekService } from '../../app/services/zenedoboz/zenek.service';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {

  zenek:Zene[]=[]
  constructor(public zene:ZenekService){}


}
