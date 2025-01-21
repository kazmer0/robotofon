import { AfterViewInit, Component } from '@angular/core';
import { HangzaporService } from '../../app/services/hangzapor.service';
import { ConnectButtonComponent } from "../connect-button/connect-button.component";

@Component({
  selector: 'app-hangzapor-jatek',
  standalone: true,
  imports: [ConnectButtonComponent, ],
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
    gameContainer?.addEventListener('click', (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement; // Get the clicked element

      // Check if the clicked element is NOT a tile
      if (!clickedElement.classList.contains('tile')) {
        this.hangzaporService.isGameOver(); // Call the game over function
      }
    });
  }
  restart() {
    this.hangzaporService.restartGame();
  }

  nextLevel() {
    this.hangzaporService.nextLevel();
  }
  startGame(){
    this.hangzaporService.startGame();
  }

}
