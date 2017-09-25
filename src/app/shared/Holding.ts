import { Share } from './Share';
export class Holding{
    constructor(
        public share: Share,
        public amount: number = 0
    ){}
}