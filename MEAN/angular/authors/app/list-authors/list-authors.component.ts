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

  ngOnInit() {
    this._httpService.getAuthors().subscribe(data =>{
      this.authors = data['authors'];
    });
  }

  delete(id){
    this._httpService.deleteAuthor(id).subscribe(data=>{
      console.log(data);
    });
    this.ngOnInit();
  }
  edit(id){
    this._router.navigate(['/edit/' + id]);
  }
}
