import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  players = []
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._httpService.getPlayers().subscribe(data=>{
      this.players = data['players'];
    });
  }
  
  deletePlayer(id, name){
    if (confirm("Are you sure you want to remove " + name + "?")) {
      this._httpService.deletePlayer(id).subscribe(data=>{
        console.log(data);
        this.ngOnInit();
      });
    }    
  }
}
