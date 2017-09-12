import { Share } from './Share';
export class Transaction{
    constructor(
        public share: Share,
        public op: Operation,
        public amount: number,
    ){

    }
}

export enum Operation{
    "add",
    "subs",
    "mult",
    "div"
}