import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/Card';
import { GameService } from '../game.service';

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
}
