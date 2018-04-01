import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName1: String;
  userName2: String;
  user1: any;
  user2: any;
  user1Ready: boolean;
  user2Ready: boolean;
  user1Error: boolean;
  user2Error: boolean;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.userName1 = "";
    this.userName2 = "";
    this.user1Ready = false;
    this.user2Ready = false;
    this.user1Error = false;
    this.user2Error = false;
  }

  getUser1(){
    this._httpService.loadUser(this.userName1).subscribe(
      data=>{
        this.user1 = { name: data['login'], imageUrl: data['avatar_url'], score: (data['public_repos']+data['followers'])*12 } 
        this.user1Ready = true;
      },
      err =>{
        this.user1Error = true;
      });
  }
  getUser2(){
    this._httpService.loadUser(this.userName2).subscribe(
      data=>{
        this.user2 = { name: data['login'], imageUrl: data['avatar_url'], score: (data['public_repos']+data['followers'])*12 } 
        this.user2Ready = true;
      },
      err =>{
        this.user2Error = true;
      });
  }

  battle(){
    this._httpService.addUser(this.user1).subscribe(data=>{
      console.log(data);
      this._httpService.addUser(this.user2).subscribe(data=>{
        console.log(data);
      });
    });
    this._router.navigate(['/results']);
  }
}
