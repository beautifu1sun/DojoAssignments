import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get('/posts');
  }

  submitPost(post){
    return this._http.post('/post', post);
  }
}
