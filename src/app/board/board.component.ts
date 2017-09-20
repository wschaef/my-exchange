import { Component, OnInit, Input } from '@angular/core';
import { Exchange } from '../shared/Exchange';
import { GameService } from '../game.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() exchange: Exchange;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

}
