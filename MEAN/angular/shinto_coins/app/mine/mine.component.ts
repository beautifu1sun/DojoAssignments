import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service'; 

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer: Number;
  rightAnswer: Number;  

  constructor(private _shintoService: ShintoService) { }

  ngOnInit() {
    this.answer = null;
    this.rightAnswer = 13;
  }
  mine(){
    if (this.answer == this.rightAnswer){
      this._shintoService.mine();
    }
    this.answer = null;
  }

}
