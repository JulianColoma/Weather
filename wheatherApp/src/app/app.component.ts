import { Component, OnInit } from '@angular/core';
import{WheatherservService}from'./services/wheatherserv.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
 weth:any;
 aux:any;
 weather : any;
location = {name: "London"}
  constructor(private wheatherServ: WheatherservService){
    
  }
  ngOnInit(){
    this.getWeather(this.location.name);
  }
  getWeather(cityName: string){
    this.aux = false;
    this.wheatherServ.getWeather(cityName)
    .subscribe(
      res => {
        this.weather= res
        console.log(this.weather)
        this.aux = true;
       this.weth = this.weather.weather[0].main; 
      },

      err =>console.log(err)
    )

  }
  submitLocation(cityName: HTMLInputElement){
    if(cityName.value){
this.getWeather(cityName.value);
cityName.value="";

}else{
alert("Please. Insert some value")
}
cityName.focus();
return false;
  }
  
}
