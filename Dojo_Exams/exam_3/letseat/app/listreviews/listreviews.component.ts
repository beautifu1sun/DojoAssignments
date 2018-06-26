import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-listreviews',
  templateUrl: './listreviews.component.html',
  styleUrls: ['./listreviews.component.css']
})
export class ListreviewsComponent implements OnInit {
  rest: any

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
      this.rest = { "name": "" };
      this._route.params.subscribe((params: Params) => {
        this._httpService.getRestaurant(params['id']).subscribe(data=>{
          this.rest = data['restaurant'];
        });
    });
  }
  
  newReview(){
    this._router.navigate(['/write/' + this.rest._id]);
  }
}
