import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  
  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors');
  }
  getAuthor(id){
    return this._http.get('/author/' + id);
  }
  addAuthor(author){
    return this._http.post('/addAuthor', author);
  }
  deleteAuthor(id){
    return this._http.delete('/deleteAuthor/' + id)
  }
  updateAuthor(author){
    return this._http.put('/updateAuthor', author);
  }
}
