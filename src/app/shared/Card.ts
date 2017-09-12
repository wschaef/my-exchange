import { Transaction } from './Transaction';
export class Card{
    id:number;

    constructor(public transactions: Transaction[]){

    }
}