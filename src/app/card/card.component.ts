import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/Card';
import { GameService } from '../game.service';
import { Share } from '../shared/Share';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  constructor(private gameService: GameService) {  }

  ngOnInit() {
  }

  execute(){
    this.gameService.executeCard(this.card);
  }

  listSelectableShares(): Array<Share>{
    let selectedShares = this.card.transactions.map(tr => {
      return tr.share;
    });
    console.log(selectedShares);
    let shares = this.gameService.getGame().shares;
    shares = shares.filter(share => 
      !(selectedShares.includes(share))
    );
    console.log(shares);
    return shares;
  }
}
