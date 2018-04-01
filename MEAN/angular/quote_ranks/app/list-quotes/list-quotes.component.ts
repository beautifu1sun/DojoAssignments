import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  existedAuthor: any
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.existedAuthor = { "name": "" };
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['id']).subscribe(data=>{
        this.existedAuthor = data['author'];
      });
    });
  }

  vote(id, author_id, vote){
    this._httpService.voteQuote(id, author_id, vote).subscribe(data =>{
      console.log(data);
      this.ngOnInit();
    });
  }

  deleteQuote(id, author_id){
    this._httpService.deleteQuote(id, author_id).subscribe(data =>{
      console.log(data);
      this.ngOnInit();
    });
  }
}
