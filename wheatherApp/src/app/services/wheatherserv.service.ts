import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WheatherservService {
  URL: string = '';
  apiKey = '307aae61ba00260cf7d77b219a2c3355'
  constructor( private http: HttpClient) { 
this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=` 
  }

  getWeather(cityName: string){
 return this.http.get(`${this.URL}+${cityName}`);
  }
}
