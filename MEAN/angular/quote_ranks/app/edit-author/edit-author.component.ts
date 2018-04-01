import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  existedAuthor: any

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.existedAuthor = { "name": "" };
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['id']).subscribe(data=>{
        if (data['message'] == "Error"){
          this._router.navigate(['/errorlink']);
        }
        else{
          this.existedAuthor = data['author'];
        }
      });
    });
  }
  cancel(){
    this._router.navigate(['/']);
  }
  update(){
    this._httpService.updateAuthor(this.existedAuthor).subscribe(data=>{
      console.log(data);
      this._router.navigate(['/']);
    })
  }
}
