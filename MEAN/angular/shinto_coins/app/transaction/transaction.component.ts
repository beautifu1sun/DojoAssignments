import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction = { 'id': "", 'action': '', 'amount': '', 'value': "" };

  constructor(
    private _shintoService: ShintoService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.transaction = this._shintoService.getTransacation(params.id));
  }
}
