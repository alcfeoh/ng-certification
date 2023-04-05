import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFiveDayForecast, IForecast } from '../models/forecast.interface';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastForZipCode: IForecast;
  zipCode: string|null;
  fiveDayForecast: Array<IFiveDayForecast> = new Array<IFiveDayForecast>();
  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.zipCode = this.route.snapshot.paramMap.get('zipCode');    
    this.weatherService.getForecastForZipCode(this.zipCode)
    .subscribe({
      next: (response) => {
        this.forecastForZipCode = response;
        
        const next5days = [...new Set(response.list.map(r => r.dt_txt.substring(0, 10)))].splice(0);
        next5days.forEach(day => {
          const dailyData = response.list.find(d => d.dt_txt.substring(0, 10) === day);
          this.fiveDayForecast.push({
            temperatureDate: dailyData?.dt_txt,
            main: dailyData?.weather[0].main,
            temp_min: dailyData?.main.temp_min,
            temp_max: dailyData?.main.temp_max,
            imageName: this.setImageName(dailyData?.weather[0].main),
          });
        });
      }
    });
  }

  setImageName(currentConditions) {
    return this.weatherService.getImageName(currentConditions);
  }  
}
