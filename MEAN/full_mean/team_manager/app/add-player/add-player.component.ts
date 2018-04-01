import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  newPlayer: any;
  error: Boolean;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPlayer = { "name": "", "position": ""}
    this.error = false;
  }

  createPlayer(){
    this._httpService.createPlayer(this.newPlayer).subscribe(data=>{
      console.log(data);
      if (data['message']=="Error"){
        this.error = true;
      }
      else{
        this._router.navigate(['/players/list']);
      }
    });
  }

}
