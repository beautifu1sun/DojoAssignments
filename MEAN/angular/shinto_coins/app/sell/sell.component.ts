import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  numToSell: number;
  value: number;
  balance: number;
  constructor(private _shintoService: ShintoService) { }
  ngOnInit() {
    this.numToSell = null
    this.value = this._shintoService.getValue();
    this.balance = this._shintoService.getBalance();
  }
  sell(){
    if (this.numToSell){
      this._shintoService.sell(this.numToSell);
      this.numToSell = null;
      this.value = this._shintoService.getValue();
      this.balance = this._shintoService.getBalance();
    }
  }
}
