import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newrest',
  templateUrl: './newrest.component.html',
  styleUrls: ['./newrest.component.css']
})
export class NewrestComponent implements OnInit {
  errorsOn: Boolean;
  newRestaurant: any;

  constructor(
    private _httpService: HttpService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.errorsOn = false;
    this.newRestaurant = { 'name': '', 'cuisine': ''};
  }

  createRestaurant(){
    this._httpService.addRestaurant(this.newRestaurant).subscribe(data=>{
      if (data['message'] != "Error"){
        this._router.navigate(['/']);
      }
      else {
        this.errorsOn = true;
      }
    });
  }
  cancel(){
    this._router.navigate(['/']);
  }
}
