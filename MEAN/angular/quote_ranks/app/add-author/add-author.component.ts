import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor: any;
  error: Boolean;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ){ }

  ngOnInit(){
    this.error = false;
    this.newAuthor = {'name': ""};
  }

  cancel(){
    this._router.navigate(['/']);
  }

  add(){
    this._httpService.addAuthor(this.newAuthor).subscribe(data => { 
      if (data['message'] == "Error"){
        this.newAuthor = {'name': ""};
        this.error = true;
      }else{
        this._router.navigate(['/']);
      }
    });
  }
}
