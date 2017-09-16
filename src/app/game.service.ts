import { Injectable } from '@angular/core';
import { Game } from './shared/Game';
import { Player } from './shared/Player';
import { Exchange, Price } from './shared/Exchange';
import { Share } from './shared/Share';
import { Card } from './shared/Card';
import { Transaction, Operation } from './shared/Transaction';
import { Depot } from './shared/Depot';

@Injectable()
export class GameService {

  private game: Game;

  constructor() { }

  getGame(): Game {
    let game: Game = new Game();
    this.game = game;
    this.init(game);
    return game;
  }

  public init(game:Game): Game {
    this.initShares(game);
    this.initCards(game);
    this.initPlayers(game);
    this.initExchange(game);

    return game
  }

  private initPlayers(game: Game) {
    game.players = [];
    [
      {name:"Vovik", color:"#ff0000"},
      {name:"Tatjana", color:"#ffff00"},
      {name:"Richard", color:"#00ff00"}
    ].forEach(it => {
      game.players.push(
        new Player(it.name,it.color)
      );
    })
  }

  private initShares(game: Game) {
    game.shares = [];
    [
      {name:"BMW", icon:"car"},
      {name:"DeuBa", icon:"money"},
      {name:"PB", icon:"tint"},
      {name:"Apple", icon:"apple"}].forEach(it => {
      game.shares.push(new Share(it.name, it.icon));
    });
  }

  private initCards(game: Game) {
    let cards: Card[] = [];
    game.shares.forEach(share => {
      
      //add small cards
      [30,40,50,60].forEach(amount => {
        cards.push(new Card(
            [ 
              new Transaction(share, Operation.add,amount),
              new Transaction(null, Operation.subs,90-amount)
            ]
          )
        );
        cards.push(new Card(
            [ 
              new Transaction(share, Operation.subs,90-amount),
              new Transaction(null, Operation.add,amount)
            ]
          )
        );
      })

      //add 100er cards
      cards.push(new Card(
        [
          new Transaction(share, Operation.add, 100),
          new Transaction(null, Operation.subs, 10),
          new Transaction(null, Operation.subs, 20),
          new Transaction(null, Operation.subs, 30)
        ]
      ));
      
      //add mult cards
      cards.push(new Card(
        [
          new Transaction(share, Operation.mult, 2),
          new Transaction(null, Operation.mult, 0.5)
        ]
      ));
      cards.push(new Card(
        [
          new Transaction(null, Operation.mult, 2),
          new Transaction(share, Operation.mult, 0.5)
        ]
      ));
    })
    cards.forEach((card, i) => {
      card.id = i;
    });
    game.cards = cards;
  }

  private initExchange(game: Game) {
    let exchange = new Exchange();
    game.shares.forEach(share =>{
      exchange.prices.push({share:share, value:exchange.defaultValue});
    });
    game.players.forEach(player =>{
      exchange.depots.push(new Depot(player,0,[]));
    });
    game.exchange = exchange;
  }

  public executeCard(card: Card){
    card.transactions.forEach(transaction=>{
      if(transaction.share !== null){
        this.executeTransaction(transaction);
      }
    });
  }

  private executeTransaction(transaction: Transaction){
    let price = this.game.exchange.prices.find(p => 
      p.share.name == transaction.share.name
    );
    let amount;
    switch (transaction.op) {
      case Operation.add:
      amount = price.value + transaction.amount;
      break;
      case Operation.subs:
      amount = price.value - transaction.amount;
      break;
      case Operation.mult:
      amount = price.value * transaction.amount;
      break;
      
      default:
      amount = price.value;
      break;
    }
    this.updatePrice(price, amount);
  }

  private updatePrice(price: Price, amount: number){
    price.value = amount
  }
  
}
