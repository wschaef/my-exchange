import { Player } from './Player';
import { Share } from './Share';
import { Holding } from './Holding';
export class Depot{
    constructor(
        public player: Player,
        public credit: number,
        public stock: Holding[]
    ){}

}
