import { Share } from './Share';
import { Player } from './Player';
import { Depot } from './Depot';
import { Holding } from './Holding';
export class Exchange{
    private id:number;
    public prices: Array<Price>;
    public depots: Depot[];
    public defaultPrice: number;
    public defaultCredit: number;
    constructor(){
        this.prices = new Array<Price>();
        this.depots = new Array<Depot>();
        this.defaultPrice = 100;
        this.defaultCredit = 1000;
    }

    getHolding(player: Player, share: Share) : Holding{
        let depot = this.getDepot(player);
        let holding
        if (depot){
            holding = depot.stock.find(holding => holding.share === share);
            if(!holding){
                holding = {share: share, amount: 0};
                depot.stock.push(holding);
            }
        }
        return holding
      }
    
    getDepot(player: Player) : Depot{
        let depot = this.depots.find(depot => player == depot.player);
        if(!depot){
            depot = new Depot(player,this.defaultCredit,[])
            this.depots.push(depot);
        }
        return depot
    }

    getPrice(share: Share) : Price{
        return this.prices.find(price => price.share === share);
    }

}

export interface Price{
    share: Share;
    value: number;
}
