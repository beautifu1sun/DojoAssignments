import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProduct(product){
    return this._http.post('/addproduct', product);
  }

  getProducts(){
    return this._http.get('/showProducts');
  }

  getProduct(id){
    return this._http.get('/showProduct/' + id);
  }

  deleteProduct(id){
    return this._http.delete('/deleteProduct/' + id);
  }

  updateProduct(product){
    return this._http.put('/updateProduct', product);
  }
}
