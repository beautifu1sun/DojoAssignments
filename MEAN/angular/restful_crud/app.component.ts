import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask: any;
  editTask: any;
  localData: Array<Object>;
  editMode: boolean;

  constructor( private _httpService: HttpService ){};
  
  ngOnInit(){
    this.newTask = { title: "", description: "" };
    this.editTask = { title: "", description: "" };
    this.editMode = false;
    this.showTasks();
  }

  createTask(){
    this.localData.push(this.newTask);
    let observ = this._httpService.createTask(this.newTask);
    observ.subscribe(data => {
      this.newTask = { title: "", description: "" };
    });
  }
  isEditOn(){
    return this.editMode;
  }
  showTasks(){
    let observ = this._httpService.getTasks();
    observ.subscribe(data => {
      this.localData = [];
      this.localData = data['tasks'];
    });
  }
  deleteTask(id){
    let observ = this._httpService.deleteTask(id);
    observ.subscribe(data => {
      console.log(data);
      this.showTasks()
    });
  }
  showEdit(id){
    let observ = this._httpService.getTask(id);
    observ.subscribe(data => {
      this.editTask = data['task'];
      this.editMode = true;
    });
  }
  updateTask(id){
    let observ = this._httpService.editTask(id, this.editTask);
    observ.subscribe(data => {
      console.log(data);
      this.showTasks()
      this.editMode = false;
      this.editTask = { title: "", description: "" };
    });
  }
}
