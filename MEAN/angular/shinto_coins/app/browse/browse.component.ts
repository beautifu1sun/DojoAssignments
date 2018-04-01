import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  transactions: any;

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.transactions = this._shintoService.browse();
  }
  seeDetails(id){
    return this._shintoService.seeDetails(id);
  }
}
