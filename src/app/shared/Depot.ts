import { Player } from './Player';
import { Share } from './Share';
export class Depot{
    constructor(
        public player: Player,
        public credit: number,
        public stock: Holding[]
    ){}

}

export interface Holding{
    share: Share;
    amount: number;
}