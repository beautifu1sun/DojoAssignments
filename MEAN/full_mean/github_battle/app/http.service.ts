import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor( private _http: HttpClient) { }

  loadUser(userName){
    return this._http.get('https://api.github.com/users/' + userName);
  }

  addUser(newUser){
    return this._http.post('/addUser', newUser);
  }

  getLast2Users(){
    return this._http.get('/getresults');
  }

  getAllUsers(){
    return this._http.get('/users');
  }
}
