import { Share } from './Share';
export class Transaction{
    public fixed: boolean = false;

    constructor(
        public share: Share,
        public op: Operation,
        public amount: number,
    ){
        if(share){this.fixed = true}
    }
}

export enum Operation{
    "add",
    "subs",
    "mult",
    "div"
}