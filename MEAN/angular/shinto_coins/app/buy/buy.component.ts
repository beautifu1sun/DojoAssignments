import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  numToBuy: number;
  value: number;
  balance: number;
  constructor(private _shintoService: ShintoService) { }
  ngOnInit() {
    this.numToBuy = null
    this.value = this._shintoService.getValue();
    this.balance = this._shintoService.getBalance();
  }
  buy(){
    if (this.numToBuy){
      this._shintoService.buy(this.numToBuy);
      this.numToBuy = null
      this.value = this._shintoService.getValue();
      this.balance = this._shintoService.getBalance();
    }
  }
}
