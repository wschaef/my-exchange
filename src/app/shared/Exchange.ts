import { Share } from './Share';
import { Player } from './Player';
import { Depot, Holding } from './Depot';
export class Exchange{
    private id:number;
    public prices: Array<Price>;
    public depots: Depot[];
    constructor(public defaultValue:number = 100){
        this.prices = new Array<Price>();
        this.depots = new Array<Depot>();
    }

    getHolding(player: Player, share: Share) : Holding{
        let depot = this.getDepot(player);
        let holding
        if (depot){
            holding = depot.stock.find(holding => holding.share === share);
        } 
        return holding
      }
    
    getDepot(player: Player) : Depot{
        let depot = this.depots.find(depot => player === depot.player)[0];
        return depot
    }

}

export interface Price{
    share: Share;
    value: number;
}
