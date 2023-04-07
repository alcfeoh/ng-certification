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
        this.forecastForZipCode.list.forEach(day => {
          this.fiveDayForecast.push({
            temperatureDate: day?.dt * 1000,
            main: day?.weather[0].main,
            temp_min: day?.temp.min,
            temp_max: day?.temp.max,
            imageName: this.setImageName(day?.weather[0].main),
          });
        });
      }
    });
  }

  setImageName(currentConditions) {
    return this.weatherService.getImageName(currentConditions);
  }  
}
