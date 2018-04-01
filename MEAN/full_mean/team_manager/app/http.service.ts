import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor( private _http: HttpClient) { }

  createPlayer(player){
    return this._http.post('/createPlayer', player);
  }
  getPlayers(){
    return this._http.get('/players');
  }
  deletePlayer(id){
    return this._http.delete('/deletePlayer/' + id);
  }
  getPlayersByGame(game){
    return this._http.get('/playersByGame/' + game);
  }
  changeStatus(player_id, game_id, newStatus){
    return this._http.put('/changeStatus/' + player_id, { game_id: "game" + game_id + "_status" , newStatus: newStatus})
  }
}
