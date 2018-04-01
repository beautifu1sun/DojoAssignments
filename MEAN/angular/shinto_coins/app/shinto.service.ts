import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ShintoService {
  balance = 0;
  value = 1;
  transactions = [];

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  getValue() {
    return this.value;
  }

  getBalance(){
    return this.balance;
  }

  getTransactions(){
    return this.transactions;
  }

  getTransacation(id){
    for (let each in this.transactions){
      if (this.transactions[each]['id'] == Number(id)){
        return this.transactions[each];
      }
    }
  }

  mine(){
    this.balance++; 
    this.value++;
    this.transactions.push({'id': Math.trunc(Math.random() * 9999)+1, 'action': 'Mined', 'amount': 1, 'value': this.value})
  }

  buy(num){
    this.balance += Number(num);
    this.value += Number(num);
    this.transactions.push({'id': Math.trunc(Math.random() * 9999)+1, 'action': 'Bought', 'amount': num, 'value': this.value})
  }

  sell(num){
    this.balance -= Number(num);
    this.value -= Number(num);
    this.transactions.push({'id': Math.trunc(Math.random() * 9999)+1, 'action': 'Sold', 'amount': num, 'value': this.value})
  }

  browse(){
    return this.transactions;
  }

  seeDetails(id){
    return this._router.navigate(['/browse/' + String(id)]);
  }
}
