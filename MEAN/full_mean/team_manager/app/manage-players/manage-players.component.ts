import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-manage-players',
  templateUrl: './manage-players.component.html',
  styleUrls: ['./manage-players.component.css']
})
export class ManagePlayersComponent implements OnInit {
  list: Boolean;
  add: Boolean;
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.list = false;
      this.add = false;
      if ( params['submenu'] == "list" ){
        this.list = true;
      }
      else if ( params['submenu'] == "addplayer"){
        this.add = true
      }
    });
  }
}
