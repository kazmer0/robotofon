import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ZenedobozService } from '../../services/zenedoboz/zenedoboz.service';
import { Zene } from '../../shared/models/zene/zene';
import { ZenekService } from '../../services/zenedoboz/zenek.service';

@Component({
  selector: 'app-zenedoboz',
  templateUrl: './zenedoboz.page.html',
  styleUrl: './zenedoboz.page.scss',


})
export class ZenedobozPage implements OnInit {
 public readOnly=false;
  zenek:Zene[]=[]
  constructor(public zenedoboz:ZenedobozService, public zenekservice:ZenekService ) {

  }

  ngOnInit() {

    this.zenek=this.zenekservice.getAll();

  }
  playFromList(index:number){
    this.zenek.forEach(e => {
      if(e.index != index){
        this.pauseFromList(e.index)
      }
      if(e.index == index){
        this.zenek[index].isPlaying = true;
        this.countdown(this.zenek[index].remainingTime, index)

        if(this.zenek[index].remainingTime === this.zenek[index].length){
        this.zenedoboz.playMusic(this.zenek[index].name)
      }
          this.zenedoboz.resumeMusic();
      }
    });
  }

  pauseFromList(index:number){
    this.zenek[index].isPlaying = false;
    this.zenedoboz.pauseMusic();
  }

  countdown(seconds: number, index: number) {
    let intervalId: any;

    const startCountdown = () => {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          seconds -= 1;
          console.log(seconds);
          this.zenek[index].remainingTime = seconds;
        } else {
          clearInterval(intervalId);
        this.zenek[index].remainingTime= this.zenek[index].length;
        this.pauseFromList(index);
          }
      }, 1000);
    };

    if (this.zenek[index].isPlaying === true) {
      startCountdown();
    }

    const playPauseWatcher = setInterval(() => {
      if (this.zenek[index].isPlaying === false) {
        clearInterval(intervalId);
      } else if (this.zenek[index].isPlaying === true && !intervalId) {
        startCountdown();
      }
    }, 100);
  }
  rewind(index:number){
    this.zenedoboz.rewindMusic();
    this.pauseFromList(index)
    this.zenek[index].remainingTime = this.zenek[index].length;
  }
}
