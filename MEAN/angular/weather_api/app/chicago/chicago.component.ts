import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: any;
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.weather = { 'humidity': '', 'average': '', 'low': '', 'high': '', 'status': '' };
    this._httpService.getWeather('Chicago').subscribe(data => {
      console.log(data);
      this.weather['humidity'] = data['main']['humidity'];
      this.weather['average'] = Math.round(data['main']['temp'] * 9 / 5 - 459.67);
      this.weather['low'] = Math.round(data['main']['temp_min'] * 9 / 5 - 459.67);
      this.weather['high'] = Math.round(data['main']['temp_max'] * 9 / 5 - 459.67);
      this.weather['status'] = data['weather'][0]['description'];
    });
  }
}