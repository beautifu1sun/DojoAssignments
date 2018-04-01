import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  newQuote: String;
  existingAuthor: any;
  error: Boolean;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newQuote = "";
    this.error = false;
    this.existingAuthor = { "name": "" };
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['id']).subscribe(data=>{
        this.existingAuthor = data['author'];
      });
    });
  }

  cancel(id){
    this._router.navigate(['/quotes/' + id]);
  }

  addQuote(id){
    this._httpService.addQuote(id, this.newQuote).subscribe(data => {
      if (data['message']=="Error"){
        this.error = true;
        this.newQuote = "";
      }
      else {
        this._router.navigate(['/quotes/' + id]);
      }
    });
  }
}
