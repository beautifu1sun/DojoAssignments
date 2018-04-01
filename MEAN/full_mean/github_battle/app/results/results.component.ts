import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  winner: any;
  loser: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.winner = {};
    this.loser = {};
    this._httpService.getLast2Users().subscribe(data=>{
      console.log(data);
      if(data['users'][0]['score']>data['users'][1]['score']){
        this.winner=data['users'][0];
        this.loser=data['users'][1];
      } else{
        this.winner=data['users'][1];
        this.loser=data['users'][0];
      }
    });
  }

  reset(){
    this._router.navigate(['/'])
  }
}
