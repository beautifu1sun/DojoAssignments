import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  @Input() id: Number;
  players_status = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.players_status = [];
    let game = "game" + this.id + "_status";
    this._httpService.getPlayersByGame(game).subscribe(data=>{
      for (let each in data['players']){
        this.players_status.push({ 'name': data['players'][each]['name'], 'status': data['players'][each][game], '_id': data['players'][each]['_id']})
      }      
    });
  }

  changeStatus(players_id, newStatus){
    this._httpService.changeStatus(players_id, this.id, newStatus).subscribe(data=>{
      console.log(data);
    });
    this.ngOnInit();
  }
}
