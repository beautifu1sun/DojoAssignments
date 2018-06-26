import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-listrest',
  templateUrl: './listrest.component.html',
  styleUrls: ['./listrest.component.css']
})
export class ListrestComponent implements OnInit {
  rests = [];
  editOn: Boolean;
  currentDate: Date;
  updateId: String;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.editOn = false
    this._httpService.getRestaurants().subscribe(data=>{
      if (data['message']){
        if (data['message'] == "Error"){
          console.log(data['error']);
        }
      }
      else{
        this.rests = data['restaurants'];
        for (let each in this.rests){
          if ((this.currentDate.getTime()-new Date(this.rests[each]['createdAt']).getTime())/1000 > 30){
            this.rests[each]['disabled'] = true;
          } else{
            this.rests[each]['disabled'] = false;
          }
        }
      }
    });
  }

  newRest(){
    this._router.navigate(['/new']);
  }

  readReviews(id){
    this._router.navigate(['reviews/' + id]);
  }

  update(id){
    this.editOn = true;
    this.updateId = id;
  }

  delete(id){
    this._httpService.deleteRestaurant(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }
}
