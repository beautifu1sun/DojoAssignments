import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RESTFUL APP';
  localData = [];
  constructor( private _httpService: HttpService ){};
  ngOnInit(){
    this.getTasks();
    this.getTask();
  }
  getTasks(){
    let observ = this._httpService.getTasks();
    observ.subscribe(data => {
      this.localData.push(data);
      console.log(data)
    });
  }
  getTask(){
    let observ = this._httpService.getTask();
    observ.subscribe(data => {
      this.localData.push(data);
      console.log(data)
    });
  }
}
