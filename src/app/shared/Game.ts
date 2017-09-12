import { Exchange } from './Exchange';
import { Player } from './Player';
import { Share } from './Share';
import { Card } from './Card';

export class Game{
    private id:number;
    exchange: Exchange;
    players: Player[];
    shares: Share[];
    cards: Card[];

}