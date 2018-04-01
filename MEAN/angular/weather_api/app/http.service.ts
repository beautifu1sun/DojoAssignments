import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }

  getWeather(city){
    var link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=7846dbf356aaaf1587d142f0c2cb1ed0";
    return this._http.get(link);
  }
}