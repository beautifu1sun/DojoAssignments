import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  newProduct = { 'title': "", 'price': "", 'imageUrl': "" }
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() { 
  }

  cancel(){
    this._router.navigate(['/products']);
  }

  addProduct(){
    let observ = this._httpService.addProduct(this.newProduct);
    observ.subscribe(data =>{
      console.log(data);
      this._router.navigate(['/products']);
    });
  }

}
