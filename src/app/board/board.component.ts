import { Component, OnInit } from '@angular/core';
import { Exchange } from '../shared/Exchange';
import { GameService } from '../game.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  exchange: Exchange;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.exchange = this.gameService.getGame().exchange;
  }

}
