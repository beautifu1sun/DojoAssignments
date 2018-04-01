import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTask();
    this.getTasks();
   }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Data have been received.", data));
  }
  getTask(){
    let tempObservable = this._http.get('/tasks/5aaac6b383c68830bccfb856'); 
    tempObservable.subscribe(data => console.log("Data have been received.", data));
  }
}



