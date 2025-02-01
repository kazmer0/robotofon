import { AfterViewInit, Component } from '@angular/core';
import { HangzaporService } from '../../app/services/hangzapor.service';

@Component({
  selector: 'app-hangzapor-jatek',
  standalone: true,
  templateUrl: './hangzapor-jatek.component.html',
  styleUrl: './hangzapor-jatek.component.scss'
})
export class HangzaporJatekComponent implements AfterViewInit{

  constructor(public hangzaporService: HangzaporService

  ) {}

  ngAfterViewInit() {
    let gameContainer = document.getElementById('gameContainer');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let winInfo = document.getElementById('win');
    let loseInfo = document.getElementById('lose');
    let endInfo = document.getElementById('end');
    let startButton = document.getElementById('startButton');
    if(scoreDisplay != null){
    this.hangzaporService.setScoreDisplay(scoreDisplay);
    }
    if(winInfo != null){
    this.hangzaporService.setWinInfo(winInfo);
    }
    if(loseInfo != null){
    this.hangzaporService.setLoseInfo(loseInfo);
    }
    if(endInfo != null){
    this.hangzaporService.setEndInfo(endInfo);
    }
    if(startButton != null){
    this.hangzaporService.setStartButton(startButton);
    }

    if(this.hangzaporService.isGameStarted === true){
      gameContainer?.addEventListener('click', (event: MouseEvent) => {
        const clickedElement = event.target as HTMLElement; // Get the clicked element
        alert(this.hangzaporService.isGameStarted)
        // Check if the clicked element is NOT a tile
        if (!clickedElement.classList.contains('tile')) {
          this.hangzaporService.isGameOver(); // Call the game over function
        }
      });

    }
  }
  restart() {
    this.hangzaporService.restartGame();
  }
  currentLvl=1;

  restartLvl() {
    this.hangzaporService.restartLvl(this.currentLvl);
  }

  nextLevel() {
    this.hangzaporService.nextLevel();
    this.currentLvl++

  }

  isGameStarted=false;
  startGame(){
    this.hangzaporService.startGame();
    this.isGameStarted = true;

  let gameContainer = document.getElementById('gameContainer');

  if (gameContainer) {
    gameContainer = document.getElementById('gameContainer');

    gameContainer?.addEventListener('click', (event: MouseEvent) => {

      if (!this.isGameStarted) return;
      const clickedElement = event.target as HTMLElement;

      if (!clickedElement.classList.contains('tile')) {
        this.hangzaporService.isGameOver();
      }
    });
  }
  }


}
