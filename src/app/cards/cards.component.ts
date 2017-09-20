import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/Card';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cards: Array<Card>;
  public currentCard: Card;

  constructor() { }

  ngOnInit() {
    this.currentCard = this.cards[0];
  }

  getCurrentCard() : Card{
    return this.cards[0];
  }

  next(){
    let n = this.cards.length;
    let i = this.cards.indexOf(this.currentCard);
    i = (i+1)%n;
    this.currentCard = this.cards[i];
  }
  previous(){
    let n = this.cards.length;
    let i = this.cards.indexOf(this.currentCard);
    i <= 0 ? i = n - 1 : i--;
    this.currentCard = this.cards[i];
  }

}
