import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/Player';
import { Share } from '../shared/Share';
import { GameService } from '../game.service';

@Component({
  selector: 'trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  @Input() player: Player;
  @Input() share: Share;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  public trade(value: number){
    this.gameService.trade(this.player, this.share, value);
  }

}
