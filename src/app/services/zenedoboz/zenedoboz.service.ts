import { Injectable } from '@angular/core';
import { DataSender } from '../system/dataSender.services';

@Injectable({
  providedIn: 'root'
})
export class ZenedobozService {

  constructor(public dataSender:DataSender) { }
  musicToPlay:any;
  private isPlaying = false;
private currentTimeout: any = null;
private currentIndex = 0;

  ciao_bella = [
    new Note('E',500),
    new Note('A',500),
    new Note('B',500),
   new Note('C5',500),
    new Note('A',2000),
    new Note('E',500),
    new Note('A',500),
    new Note('B',500),
   new Note('C5',500),
    new Note('A',2000),
    new Note('E',500),
    new Note('A',500),
    new Note('B',500),
   new Note('C5',1000),
    new Note('B',500),
    new Note('A',500),
   new Note('C5',1000),
    new Note('B',500),
    new Note('A',500),
    new Note('E',1000),
    new Note('E',1000),
    new Note('E',1000),
    new Note('D',500),
    new Note('E',500),
    new Note('F',500),
    new Note('F',2000),
    new Note('F',500),
    new Note('E',500),
    new Note('D',500),
    new Note('F',500),
    new Note('E',2000),
    new Note('D',500),
   new Note('C4',500),
    new Note('B',1000),
    new Note('E',1000),
    new Note('B',1000),
   new Note('C5',1000),
    new Note('A',2000),

    new Note('E',500),
    new Note('A',500),
    new Note('B',500),
   new Note('C5',500),
    new Note('A',2000),
    new Note('E',500),
    new Note('A',500),
    new Note('B',500),
   new Note('C5',500),
    new Note('A',2000),
    new Note('E',500),
    new Note('A',500),
    new Note('B',500),
   new Note('C5',1000),
    new Note('B',500),
    new Note('A',500),
   new Note('C5',1000),
    new Note('B',500),
    new Note('A',500),
    new Note('E',1000),
    new Note('E',1000),
    new Note('E',1000),
    new Note('D',500),
    new Note('E',500),
    new Note('F',500),
    new Note('F',2000),
    new Note('F',500),
    new Note('E',500),
    new Note('D',500),
    new Note('F',500),
    new Note('E',2000),
    new Note('D',500),
   new Note('C4',500),
    new Note('B',1000),
    new Note('E',1000),
    new Note('B',1000),
   new Note('C5',1000),
    new Note('A',2000),

  ]
  can_can = [
    new Note('C4',1200),
    new Note('C4',1200),
    new Note('D',600),
    new Note('F',600),
    new Note('E',600),
    new Note('D',600),
    new Note('G',1200),
    new Note('G',1200),
    new Note('G',600),
    new Note('A',600),
    new Note('E',600),
    new Note('F',600),
    new Note('D',1200),
    new Note('D',1200),
    new Note('D',600),
    new Note('F',600),
    new Note('E',600),
    new Note('D',600),
    new Note('C4',600),
    new Note('C5',600),
    new Note('B',600),
    new Note('A',600),
    new Note('G',600),
    new Note('F',600),
    new Note('E',600),
    new Note('D',600),
    new Note('C4',1200),
    new Note('C4',1200),
    new Note('D',600),
    new Note('F',600),
    new Note('E',600),
    new Note('D',600),
    new Note('G',1200),
    new Note('G',1200),
    new Note('G',600),
    new Note('A',600),
    new Note('E',600),
    new Note('F',600),
    new Note('D',1200),
    new Note('D',1200),
    new Note('D',600),
    new Note('F',600),
    new Note('E',600),
    new Note('D',600),
    new Note('C4',600),
    new Note('G',600),
    new Note('D',600),
    new Note('E',600),
    new Note('C4',600),
  ]
  hbd = [
    new Note('C4',500),
    new Note('C4',500),
    new Note('D',1000),
    new Note('C4',1000),
    new Note('F',1000),
    new Note('E',2000),
    new Note('C4',500),
    new Note('C4',500),
    new Note('D',1000),
    new Note('C4',1000),
    new Note('G',1000),
    new Note('F',2000),
    new Note('C4',500),
    new Note('C4',500),
    new Note('C5',1200),
    new Note('A',1000),
    new Note('F',1000),
    new Note('E',1000),
    new Note('D',1700),
    new Note('C5',500),
    new Note('C5',500),
    new Note('A',1000),
    new Note('F',1000),
    new Note('G',1000),
    new Note('F',1000),
  ]
  jingle = [
    new Note('E',600),
    new Note('E',600),
    new Note('E',1200),
    new Note('E',600),
    new Note('E',600),
    new Note('E',1200),
    new Note('E',600),
    new Note('G',600),
    new Note('C4',600),
    new Note('D',600),
    new Note('E',1800),
    new Note('F',600),
    new Note('F',600),
    new Note('F',600),
    new Note('F',300),
    new Note('F',300),
    new Note('E',600),
    new Note('E',600),
    new Note('E',300),
    new Note('E',300),
    new Note('E',300),
    new Note('D',600),
    new Note('D',600),
    new Note('E',600),
    new Note('D',1200),
    new Note('G',1200),
    new Note('E',600),
    new Note('E',600),
    new Note('E',1200),
    new Note('E',600),
    new Note('E',600),
    new Note('E',1200),
    new Note('E',600),
    new Note('G',600),
    new Note('C4',600),
    new Note('D',600),
    new Note('E',1200),
    new Note('F',600),
    new Note('F',600),
    new Note('F',1200),
    new Note('F',300),
    new Note('F',300),
    new Note('E',600),
    new Note('E',600),
    new Note('E',300),
    new Note('E',300),
    new Note('G',600),
    new Note('G',600),
    new Note('F',600),
    new Note('D',600),
    new Note('C4',600),
  ]

  sendNote(note:string){
    switch(note){
       case'C4':
       this.dataSender.C4_hang();
       break;
       case'D4': case'D':
       this.dataSender.D_hang();
       break;
       case'E4': case'E':
       this.dataSender.E_hang();
       break;
       case'F4': case'F':
       this.dataSender.F_hang();
       break;
       case'G4': case'G':
       this.dataSender.G_hang();
       break;
       case'A4': case'A':
       this.dataSender.A_hang();
       break;
       case'B4': case'B':
       this.dataSender.B_hang();
       break;
       case'C5':
       this.dataSender.C5_hang();
       break;
    }
  }

  playMusic(music: string) {
    switch (music) {
      case 'Ciao Bella':
        this.musicToPlay = this.ciao_bella;
        break;
      case 'Can Can':
        this.musicToPlay = this.can_can;
        break;
      case 'Happy birthday to you!':
        this.musicToPlay = this.hbd;
        break;
      case 'Jingle bells':
        this.musicToPlay = this.jingle;
        break;
    }

    console.log('adat fogadva, music: ', music);

    this.isPlaying = true;
    this.currentIndex = 0;
    this.playNextNote();
    let negyzet=document.getElementById('music-logo')?.style.backgroundColor
    negyzet='red';
  }

  pauseMusic() {
    this.isPlaying = false;
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout);
      this.currentTimeout = null;
    }
    console.log('Music paused');
  }

  resumeMusic() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.playNextNote();
      console.log('Music resumed');
    }
  }
  rewindMusic(){
    this.pauseMusic();
    this.currentIndex = 0;
  }

   changeColor(){
    let negyzet=document.getElementById('music-logo')?.style.backgroundColor
    negyzet='red';
    switch(this.musicToPlay[this.currentIndex]){
      case 1:
        negyzet="blue";
    }

  }

  private playNextNote() {
    if (this.currentIndex < this.musicToPlay.length && this.isPlaying) {
      document.getElementById
      this.changeColor();
      this.musicToPlay[this.currentIndex].
      this.sendNote(this.musicToPlay[this.currentIndex].key);
      this.currentTimeout = setTimeout(() => {
        this.currentIndex++;
        this.playNextNote();
      }, this.musicToPlay[this.currentIndex].duration*0.7);
    } else if (this.currentIndex >= this.musicToPlay.length) {
      console.log('Finished playing the music.');
      this.isPlaying = false;
    }
  }

}
class Note {
  constructor(
    public key: string,
    public duration: number,

  ) {}
}
