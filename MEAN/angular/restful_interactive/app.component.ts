import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  getTask_id: String;
  localData: Array<Object>;

  constructor( private _httpService: HttpService ){};
  
  ngOnInit(){
    this.getTask_id = "";
  }

  tasksButtonClick(){
    let observ = this._httpService.getTasks();
    observ.subscribe(data => {
      this.localData = [];
      this.localData = data['tasks'];
    });
  }

  getTaskId(){
    let observ = this._httpService.getTasks();
    observ.subscribe(data => {
      this.localData = [];
      for (let each in data['tasks']){
        if (this.getTask_id == data['tasks'][each]['_id'].slice(data['tasks'][each]['_id'].length-3, data['tasks'][each]['_id'].length)){
          this.localData.push(data['tasks'][each]);
        }
      }
      this.getTask_id = "";
    });
  }
}
