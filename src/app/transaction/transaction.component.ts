import { Component, OnInit, Input } from '@angular/core';
import { Transaction, Operation } from '../shared/Transaction';
import { Share } from '../shared/Share';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input() transaction: Transaction;
  @Input() selectableShares: Array<Share>
  share: Share;
  public icons = { 
    "add":"plus",
    "subs":"minus",
    "mult":"times",
  }
  constructor() { }

  ngOnInit() {
  }

  getIcon(op: Operation): String{
    let iconName = ""
    switch (op) {
      case Operation.add:
        iconName = "plus"
        break;
      case Operation.subs:
        iconName = "minus"
        break;
      case Operation.mult:
        iconName = "times"
        break;
      default:
        break;
    }
    return iconName
  }

  onSelectShare(){
    this.transaction.share = this.share;
  }

}
