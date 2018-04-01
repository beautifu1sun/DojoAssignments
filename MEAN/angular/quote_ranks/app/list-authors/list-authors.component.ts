import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {
  authors = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router
    ) { }

  //magic *-*
  sortByKey(array, key) {
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
  }

  ngOnInit() {
    this._httpService.getAuthors().subscribe(data =>{
      this.sortByKey(data['authors'], 'name')
      this.authors = data['authors'];
    });
  }
  viewQuotes(id){
    this._router.navigate(['/quotes/' + id]);
  }
  edit(id){
    this._router.navigate(['/edit/' + id]);
  }
}
