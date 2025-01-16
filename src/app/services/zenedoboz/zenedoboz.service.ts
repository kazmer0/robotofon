import { Injectable } from '@angular/core';
import { DataSender } from '../system/dataSender.services';

@Injectable({
  providedIn: 'root'
})
export class ZenedobozService {

  constructor(public dataSender:DataSender) { }
  musicToPlay:any;
  private isPlaying = false; // Control flag for play/pause
private currentTimeout: any = null; // To track the active setTimeout
private currentIndex = 0; // To track the current note being played

  ciao_bella = [
    new Note('E',100),
    new Note('A',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('A',100),
    new Note('E',100),
    new Note('A',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('A',100),
    new Note('E',100),
    new Note('A',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('B',100),
    new Note('A',100),
   new Note('C5',100),
    new Note('B',100),
    new Note('A',100),
    new Note('E',100),
    new Note('E',100),
    new Note('E',100),
    new Note('D',100),
    new Note('E',100),
    new Note('F',100),
    new Note('F',100),
    new Note('F',100),
    new Note('E',100),
    new Note('D',100),
    new Note('F',100),
    new Note('E',100),
    new Note('D',100),
   new Note('C4',100),
    new Note('B',100),
    new Note('E',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('A',100),
    new Note('E',100),
    new Note('A',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('A',100),
    new Note('E',100),
    new Note('A',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('A',100),
    new Note('E',100),
    new Note('A',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('B',100),
    new Note('A',100),
   new Note('C5',100),
    new Note('B',100),
    new Note('A',100),
    new Note('E',100),
    new Note('E',100),
    new Note('E',100),
    new Note('D',100),
    new Note('E',100),
    new Note('F',100),
    new Note('F',100),
    new Note('F',100),
    new Note('E',100),
    new Note('D',100),
    new Note('F',100),
    new Note('E',100),
    new Note('D',100),
   new Note('C4',100),
    new Note('B',100),
    new Note('E',100),
    new Note('B',100),
   new Note('C5',100),
    new Note('A',100),
  ]
  can_can = [
    new Note('C4',1),
    new Note('C4',1),
    new Note('D',1),
    new Note('F',1),
    new Note('E',1),
    new Note('D',1),
    new Note('G',1),
    new Note('G',1),
    new Note('G',1),
    new Note('A',1),
    new Note('E',1),
    new Note('F',1),
    new Note('D',1),
    new Note('D',1),
    new Note('D',1),
    new Note('F',1),
    new Note('E',1),
    new Note('D',1),
    new Note('C4',1),
    new Note('C5',1),
    new Note('B',1),
    new Note('A',1),
    new Note('G',1),
    new Note('F',1),
    new Note('E',1),
    new Note('D',1),
    new Note('C4',1),
    new Note('C4',1),
    new Note('D',1),
    new Note('F',1),
    new Note('E',1),
    new Note('D',1),
    new Note('G',1),
    new Note('G',1),
    new Note('G',1),
    new Note('A',1),
    new Note('E',1),
    new Note('F',1),
    new Note('D',1),
    new Note('D',1),
    new Note('D',1),
    new Note('F',1),
    new Note('E',1),
    new Note('D',1),
    new Note('C4',1),
    new Note('G',1),
    new Note('D',1),
    new Note('E',1),
    new Note('C4',1),
  ]
  hbd = [
    new Note('C',1),
    new Note('C',1),
    new Note('D',1),
    new Note('C',1),
    new Note('F',1),
    new Note('E',1),
    new Note('C',1),
    new Note('C',1),
    new Note('D',1),
    new Note('C',1),
    new Note('G',1),
    new Note('F',1),
    new Note('C',1),
    new Note('C',1),
    new Note('C5',1),
    new Note('A',1),
    new Note('F',1),
    new Note('E',1),
    new Note('D',1),
    new Note('C5',1),
    new Note('C5',1),
    new Note('A',1),
    new Note('F',1),
    new Note('G',1),
    new Note('F',1),
  ]
  jingle = [
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('G',1),
    new Note('C4',1),
    new Note('D',1),
    new Note('E',1),
    new Note('F',1),
    new Note('F',1),
    new Note('F',1),
    new Note('F',1),
    new Note('F',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('D',1),
    new Note('D',1),
    new Note('E',1),
    new Note('D',1),
    new Note('G',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('G',1),
    new Note('C4',1),
    new Note('D',1),
    new Note('E',1),
    new Note('F',1),
    new Note('F',1),
    new Note('F',1),
    new Note('F',1),
    new Note('F',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('E',1),
    new Note('G',1),
    new Note('G',1),
    new Note('F',1),
    new Note('D',1),
    new Note('C4',1),
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
    // Select the music array based on the input
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

    this.isPlaying = true; // Set playing flag to true
    this.currentIndex = 0; // Reset index to the beginning
    this.playNextNote(); // Start playing the music
  }

  pauseMusic() {
    this.isPlaying = false; // Set playing flag to false
    if (this.currentTimeout) {
      clearTimeout(this.currentTimeout); // Stop any active timeout
      this.currentTimeout = null;
    }
    console.log('Music paused');
  }

  resumeMusic() {
    if (!this.isPlaying) {
      this.isPlaying = true; // Resume playing
      this.playNextNote(); // Continue from where it was paused
      console.log('Music resumed');
    }
  }
  rewindMusic(){
    this.pauseMusic();
    this.currentIndex = 0;
  }

  private playNextNote() {
    if (this.currentIndex < this.musicToPlay.length && this.isPlaying) {
      // Send the current note to the ESP32
      this.sendNote(this.musicToPlay[this.currentIndex].key);

      // Schedule the next note after the current note's duration
      this.currentTimeout = setTimeout(() => {
        this.currentIndex++; // Move to the next note
        this.playNextNote(); // Recursively call for the next note
      }, this.musicToPlay[this.currentIndex].duration);
    } else if (this.currentIndex >= this.musicToPlay.length) {
      console.log('Finished playing the music.');
      this.isPlaying = false; // Stop playing when done
    }
  }

}
class Note {
  constructor(
    public key: string,
    public duration: number,

  ) {}
}
