import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  rest: any
  newReview: any;
  errorsOn: Boolean;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.errorsOn = false;
    this.newReview = { 'review': '', 'rating': '1', 'reviewer': '' };
    this.rest = { "name": "" };
    this._route.params.subscribe((params: Params) => {
      this._httpService.getRestaurant(params['id']).subscribe(data=>{
        this.rest = data['restaurant'];
      });
  });
  }

  postReview(){
    this._httpService.addReview(this.rest._id, this.newReview).subscribe(data=>{
      if (data['message'] != "Error"){
        this._router.navigate(['/reviews/' + this.rest._id]);
      }
      else {
        this.errorsOn = true;
      }
    });
  }

  cancel(){
    this._router.navigate(['/reviews/' + this.rest._id]);
  }

}

