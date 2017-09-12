import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../shared/Game';
import { Player } from '../shared/Player';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public game: Game;
  public currentPlayer: Player;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    console.log("init");
    this.game = this.gameService.getGame();
    this.gameService.init(this.game);
    this.currentPlayer = this.game.players[0];
  }

  test(){
    console.log(JSON.stringify(this.game.players));
    console.log(JSON.stringify(this.game.shares));
    console.log(JSON.stringify(this.game.exchange));
    console.log(JSON.stringify(this.game.cards));
  }

}
