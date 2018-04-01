import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newPost: String;
  posts: Array<any>;
  error: Boolean;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newPost = "";
    this.posts = [];
    this.error = false;
    this._httpService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts['posts'];
      
    });
  }

  submitPost(){
    this._httpService.submitPost({ text: this.newPost }).subscribe(message=>{
      if (message['message']=="Error"){
        this.error = true;
        this.newPost = "";
      }
      else{
        this.ngOnInit();
      }
    });
  }
}
