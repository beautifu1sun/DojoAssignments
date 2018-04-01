import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  existedProduct: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.existedProduct = { 'title': "", 'price': "", 'imageUrl': "" };
    this._route.params.subscribe((params: Params) => {
      let observ = this._httpService.getProduct(params['id']);
      observ.subscribe(data => {
        console.log(data);
        this.existedProduct = data['data'];
      });
    });
  }

  updateProduct(){
    let observ = this._httpService.updateProduct(this.existedProduct);
    observ.subscribe(data =>{
      console.log(data);
      this._router.navigate(['/products']);
    });
  }

  delete(id){
    let observ = this._httpService.deleteProduct(id);
    observ.subscribe(data => {
      console.log(data);
      this._router.navigate(['/products']);
    });
  }
}
