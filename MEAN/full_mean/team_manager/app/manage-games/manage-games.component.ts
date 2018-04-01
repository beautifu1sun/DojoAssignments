import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-manage-games',
  templateUrl: './manage-games.component.html',
  styleUrls: ['./manage-games.component.css']
})
export class ManageGamesComponent implements OnInit {
  gameExist = false;
  gameId: Number;
  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.gameId = params['gameid'];
      if ((params['gameid'] == "1")||(params['gameid'] == "2")||(params['gameid'] == "3")){
        this.gameExist = true;
      }
    });
  }
}
