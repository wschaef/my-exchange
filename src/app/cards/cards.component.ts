import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/Card';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cards: Array<Card>;

  constructor() { }

  ngOnInit() {
  }

}
