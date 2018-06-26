import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestaurants(){
    return this._http.get('/restaurants');
  }
  getRestaurant(id){
    return this._http.get('/restaurant/' + id);
  }
  addRestaurant(restaurant){
    return this._http.post('/addRestaurant', restaurant);
  }
  updateRestaurant(restaurant){
    return this._http.put('/updateRestaurant', restaurant);
  }
  deleteRestaurant(id){
    return this._http.delete('/deleteRestaurant/' + id);
  }
  addReview(id, newReview){
    return this._http.post('/addReview/' + id, newReview);
  }
}
