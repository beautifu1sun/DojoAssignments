import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    let observ = this._httpService.getProducts();
    observ.subscribe(data =>{
      this.productList = data['data'];
    });
  }
  
  delete(id){
    let observ = this._httpService.deleteProduct(id);
    observ.subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  edit(id){
    this._router.navigate(['/products/edit/' + id]);
  }
}
