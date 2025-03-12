import { Injectable } from '@angular/core';
import { DataSender } from './system/dataSender.services';
import { BluetoothService } from './system/bluetooth.service';

@Injectable({
  providedIn: 'root',
})
export class HangzaporService {

  level = 1;
  currentLvl=1;
  score : number = 0;
  bpm = 60;
  tiles: Tile[] = [];
  currentIndex = 0;
  gameOver = false;
  isGameStarted = false;

  gameSpeed = 1800;
  tileFallSpeed = 2;


  winInfo = document.getElementById('win');
  loseInfo = document.getElementById('lose');
  endInfo = document.getElementById('end');
  gameSpace = document.getElementById('gameContainer');
  scoreDisplay = document.getElementById('scoreDisplay');
  startButton = document.getElementById('startButton');

  winInfoIsShown = false;
  endInfoIsShown = false;

  gameSpaceHeight: number = 0;

  setScoreDisplay(scoreDisplay: HTMLElement) {
    this.scoreDisplay = scoreDisplay;
  }
  setWinInfo(win: HTMLElement) {
    this.winInfo = win;
  }
  setLoseInfo(lose: HTMLElement) {
    this.loseInfo = lose;
  }
  setEndInfo(end: HTMLElement) {
    this.endInfo = end;
  }
  setStartButton(start: HTMLElement){
    this.startButton = start;
  }
  musicToPlay : any;
  loadMusic( music: string){
    switch(music){
      case 'boci':
        this.musicToPlay = this.boci;
        break;
      case 'oromoda':
        this.musicToPlay = this.oromoda;
        break;
      case 'szelrol':
        this.musicToPlay = this.szelrol;
        break;
    }
    console.log('adat fogadva, music: ',music )
  }


  gameInterval: any;


  boci: Note[] = [
    new Note("C4",0.5,1),    //piros szinu tile az egyes oszlopban, ami egy félhang (Dó)
    new Note("E4",0.5,2),
    new Note("C4",0.5,1),
    new Note("E4",0.5,2),
    new Note("G4",1,3),
    new Note("G4",1,3),
    new Note("C4",0.5,1),
    new Note("E4",0.5,2),
    new Note("C4",0.5,1),
    new Note("E4",0.5,2),
    new Note("G4",1,3),
    new Note("G4",1,3),
    new Note("C5",0.5,4),
    new Note("B4",0.5,3),
    new Note("A4",0.5,2),
    new Note("G4",0.5,1),
    new Note("F4",1,1),
    new Note("A4",1,3),
    new Note("G4",0.5,4),
    new Note("F4",0.5,3),
    new Note("E4",0.5,2),
    new Note("D4",0.5,1),
    new Note("C4",1,1),
    new Note("C4",1,1),
  ];
  oromoda: Note[]=[
    new Note("E",1,2),
    new Note("E",1,2),
    new Note("F",1,3),
    new Note("G",1,4),

    new Note("G",1,4),
    new Note("F",1,3),
    new Note("E",1,2),
    new Note("D",1,2),

    new Note("C4",1,1),
    new Note("C4",1,1),
    new Note("D",1,2),
    new Note("E",1,3),

    new Note("E",1,3),
    new Note("D",0.8,2),
    new Note("D",2,2),

    new Note("E",1,2),
    new Note("E",1,2),
    new Note("F",1,3),
    new Note("G",1,4),

    new Note("G",1,4),
    new Note("F",1,3),
    new Note("E",1,2),
    new Note("D",1,2),

    new Note("C4",1,1),
    new Note("C4",1,1),
    new Note("D",1,2),
    new Note("E",1,3),

    new Note("D",1,2),
    new Note("C4",0.8,1),
    new Note("C4",2,1),



    new Note("D",1,2),
    new Note("D",1,2),
    new Note("E",1,3),
    new Note("C4",1,1),

    new Note("D",1,2),
    new Note("E",0.5,3),
    new Note("F",0.5,4),
    new Note("E",1,3),
    new Note("C4",1,1),

    new Note("D",1,2),
    new Note("E",0.5,3),
    new Note("F",0.5,4),
    new Note("E",1,3),
    new Note("D",1,2),
    new Note("C4",1,1),
    new Note("D",1,2),
    new Note("G",2,4),

    new Note("E",1,2),
    new Note("E",1,2),
    new Note("F",1,3),
    new Note("G",1,4),
    new Note("G",1,4),
    new Note("F",1,3),
    new Note("E",1,2),
    new Note("D",1,1),

    new Note("C4",1,1),
    new Note("C4",1,1),
    new Note("D",1,2),
    new Note("E",1,3),

    new Note("D",1,2),
    new Note("C4",0.8,1),
    new Note("C4",2,1),

  ]
  szelrol : Note[] = [
    new Note("C5",1,4),
    new Note("G",1,3),

    new Note("E",0.5,2),
    new Note("G",0.5,3),
    new Note("E",0.5,2),
    new Note("C4",0.5,1),

    new Note("C5",1,4),
    new Note("G",1,3),

    new Note("E",0.5,2),
    new Note("G",0.5,3),
    new Note("E",0.5,2),
    new Note("C4",0.5,1),

    new Note("E",0.5,2),
    new Note("G",0.5,4),
    new Note("G",0.5,4),
    new Note("F",0.5,3),

    new Note("E",0.5,2),
    new Note("D",0.5,1),
    new Note("E",0.5,2),
    new Note("C4",0.5,1),

    new Note("E",0.5,2),
    new Note("G",0.5,4),
    new Note("G",0.5,4),
    new Note("F",0.5,3),

    new Note("E",0.5,2),
    new Note("D",0.5,1),
    new Note("E",0.5,2),
    new Note("C4",0.5,1),

    new Note("E",0.5,2),
    new Note("G",0.5,3),
    new Note("C4",1,1),

    new Note("E",0.5,2),
    new Note("G",0.5,3),
    new Note("C4",1,1),

    new Note("G",0.5,4),
    new Note("F",0.5,3),
    new Note("E",0.5,2),
    new Note("D",0.5,1),

    new Note("C4",0.5,1),
    new Note("C4",0.5,1),
    new Note("C4",1,1),
]

  constructor( public dataSender:DataSender, public bluetooth:BluetoothService ) {}

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

  calculateGameSpaceHeight() {
    const gameContainer = document.getElementById('gameContainer');
    if (gameContainer) {
      this.gameSpaceHeight = gameContainer.offsetHeight;
    } else {
      console.error('Game container not found');
    }
  }


  whichLevel() {
    switch (this.level) {
      case 1:
        //50bpm
        this.gameSpeed = 1200;
        this.tileFallSpeed = 3;
        break;
        case 2:
          //60bpm
          this.gameSpeed = 1000;
          this.tileFallSpeed = 4;
          break;
      case 3:
        //70bpm
        this.gameSpeed = 800;
        this.tileFallSpeed = 5;
        break;
      case 4:
        //96bpm
        this.gameSpeed = 600;
        this.tileFallSpeed = 6;
        break;
    }
  }

  startGame() {

      this.isGameStarted = true
      this.hideElement(this.startButton);
      this.calculateGameSpaceHeight();
      this.whichLevel();
      const createTile = () => {
        if (this.currentIndex < this.musicToPlay.length && !this.gameOver) {
          const note = this.musicToPlay[this.currentIndex];
          const tile = new Tile(
            //----Tile paramétereinek megadása-----

            note,//Melyik hangjegyet képviseli

            this.tiles,//A képernyőn jelenlevő Tilek tömbje
            this.gameSpaceHeight,//Hány pixel magas a játéktér
            this.tileFallSpeed,//Hány pixellel essen lejjebb minden ticknél

            this.isGameOver.bind(this),//Klikkeléskor tesztel, hogy vége van-e a játéknak
            this.isGameWon.bind(this),//Klikkeléskor tesztel, hogy meg lett-e nyerve a játék
            this.updateScoreDisplay.bind(this),//+1 pont

            this.sendNote.bind(this),//Elküldi az ESP32-nek az adatot
            //------------------------------------
          );
          tile.moveTile();
          this.tiles.push(tile);
          this.currentIndex++;

          if (this.currentIndex < this.musicToPlay.length) {
            this.gameInterval = setTimeout(createTile, this.gameSpeed * this.musicToPlay[this.currentIndex - 1].duration);
          }
        }
      };
      createTile();

  }

  restartLvl(lvl:number){
    this.level =lvl;
    if(lvl == 1){
      this.score=-1
    }
    if(lvl==2 && this.musicToPlay==this.oromoda){
      this.score = 63;
    }
    if(lvl==3 && this.musicToPlay==this.oromoda){
      this.score = 127;
    }
    if(lvl==2 && this.musicToPlay==this.szelrol){
      this.score = 42;
    }
    if(lvl==3 && this.musicToPlay==this.szelrol){
      this.score = 85;
    }
    if(lvl==2 && this.musicToPlay==this.boci){
      this.score = 25;
    }
    if(lvl==3 && this.musicToPlay==this.boci){
      this.score = 51;
    }
    this.updateScoreDisplay();
    clearInterval(this.gameInterval);

    this.currentIndex = 0;
    this.clearTiles();
    this.gameOver = false;

    this.hideElement(this.winInfo);
    this.winInfoIsShown = false;
    this.hideElement(this.loseInfo);
    this.hideElement(this.endInfo);
    this.endInfoIsShown = false;
    this.startGame();
  }

  restartGame() {
    this.level =1;
    this.score = -1;
    this.updateScoreDisplay();
    clearInterval(this.gameInterval);

    this.currentIndex = 0;
    this.clearTiles();
    this.gameOver = false;

    this.hideElement(this.winInfo);
    this.winInfoIsShown = false;
    this.hideElement(this.loseInfo);
    this.hideElement(this.endInfo);
    this.endInfoIsShown = false;
    this.startGame();
  }

  nextLevel() {
    this.score++;
    this.updateScoreDisplay();
    this.level++;
    this.currentLvl++;
    this.currentIndex = 0;

    this.clearTiles();
    clearTimeout(this.gameInterval);
    this.gameOver = false;

    this.hideElement(this.winInfo);
    this.winInfoIsShown = false;
    this.whichLevel();
    this.startGame();
  }

  isGameWon() {
    if(this.score == this.musicToPlay.length ||
       this.score == 2*this.musicToPlay.length+2
      ) {
      this.clearTiles();
      this.showElement(this.winInfo);
      this.winInfoIsShown = true;
    }
    if ( this.score == 3*this.musicToPlay.length+4) {
      this.clearTiles();
      this.tiles = [];
      this.gameOver = false;
      this.showElement(this.endInfo);
      this.endInfoIsShown = true;
    }
  }

  isGameOver() {
    if(this.winInfoIsShown == false && this.endInfoIsShown == false){
    this.score = 0;
    this.clearTiles();
    this.gameOver = true;
    this.showElement(this.loseInfo);
    }
  }

  clearTiles() {
    this.tiles.forEach(tile => {
      if (tile.column) {
       if (tile.column.contains(tile.element)) {
          tile.column.removeChild(tile.element);
          tile.exists = false;
        }
      }
    });

    this.tiles = [];
  }

  updateScoreDisplay() {

    if (this.scoreDisplay != null) {
      this.score++;
      this.scoreDisplay.innerHTML = `Score: ${this.score}`;

    }
  }

  showElement(element: HTMLElement | null) {
    if (element) element.style.visibility = 'visible';
  }

  hideElement(element: HTMLElement | null) {
    if (element) element.style.visibility = 'hidden';
  }
}

class Note {
  constructor(
    public key: string,
    public duration: number,
    public lane: number
  ) {}
}

class Tile {
  column: HTMLElement | null;
  element: HTMLElement;
  exists: boolean;

  constructor(
    public note: Note,
    private tiles: Tile[],
    private gameSpaceHeight: number,
    private tileFallSpeed: number,
    private isGameOver: () => void,
    private isGameWon: () => void,
    private updateScoreDisplay: () => void,
    private sendNote: (key:string) => void,

  ) {
    this.column = document.getElementById('col' + note.lane);
    this.element = document.createElement('div');
    this.element.className = 'tile';
    this.element.style.top = '-100px';
    this.exists = true;

    if (this.column) {
      this.column.appendChild(this.element);
    }

    this.element.style.backgroundColor = 'var(--'+this.note.key+')';

    this.element.addEventListener('click', () => {
      if (this === this.tiles[0]) {
        this.sendNote(note.key)
        this.column?.removeChild(this.element);
        this.exists = false;
        this.tiles.shift();
        this.updateScoreDisplay();
        this.isGameWon();
      } else {
        this.isGameOver();
      }
    });
  }

  moveTile() {

    const topPosition = parseInt(this.element.style.top, 10) || 0;
    this.element.style.top = (topPosition + this.tileFallSpeed) + 'px';

    if (topPosition < this.gameSpaceHeight) {
      requestAnimationFrame(() => this.moveTile());
    } else if (this.exists) {
      this.isGameOver();
    }
  }
}
