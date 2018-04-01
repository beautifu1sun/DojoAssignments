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
  updateAuthor(author){
    return this._http.put('/updateAuthor', author);
  }
  addQuote(id, newQuote){
    return this._http.post('/addQuote/' + id, { quote: newQuote });
  }
  voteQuote(id, author_id, vote){
    return this._http.put('/voteQuote/' + author_id + "/" + id, { vote: vote });
  }
  deleteQuote(id, author_id){
    return this._http.delete('/deleteQuote/' + author_id + '/' + id);
  }
}
