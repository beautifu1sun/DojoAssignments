import { Component, OnInit, Input } from '@angular/core';
import { ListrestComponent } from '../listrest/listrest.component';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updaterest',
  templateUrl: './updaterest.component.html',
  styleUrls: ['./updaterest.component.css']
})
export class UpdaterestComponent implements OnInit {
  editRestaurant: any;
  errorsOn: Boolean;
  @Input() id: Number;

  constructor(
    private _mainComponent: ListrestComponent,
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.errorsOn = false;
    this.editRestaurant = { 'name': '', 'cuisine': ''};
    this._httpService.getRestaurant(this.id).subscribe(data=>{
      if (data['message']!="Error"){
        this.editRestaurant = data['restaurant'];
      }
      else{
        console.log(data);
      }
    }); 
  }

  cancel(){
    this._mainComponent.editOn = false;
  }

  update(){
    this._httpService.updateRestaurant(this.editRestaurant).subscribe(data=>{
      console.log(data);
     if (data['message'] != "Error"){
        this._mainComponent.ngOnInit();
      }
      else {
        this.errorsOn = true;
      }
    });
  }
}
