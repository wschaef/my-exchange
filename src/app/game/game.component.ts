import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../shared/Game';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  init(){
    console.log("init");
    this.game = this.gameService.getGame();
    this.gameService.init(this.game);
  }

  test(){
    console.log(JSON.stringify(this.game.players));
    console.log(JSON.stringify(this.game.shares));
    console.log(JSON.stringify(this.game.exchange));
    console.log(JSON.stringify(this.game.cards));
  }

}
