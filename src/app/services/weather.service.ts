import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { IRoot, IWeather } from '../models/weather.interface';
import { IForecast } from '../models/forecast.interface';

const RAIN = 'https://www.angulartraining.com/images/weather/rain.png';
const SUN = 'https://www.angulartraining.com/images/weather/sun.png';
const CLOUDS = 'https://www.angulartraining.com/images/weather/clouds.png';
const SNOW = 'https://www.angulartraining.com/images/weather/snow.png';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherForZipCode(zipCode: string) : Observable<IRoot> {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/';
    const weatherAppId = '5a4b2d457ecbef9eb2a71e480b947604'
    const apiUrl = `${weatherApiUrl}weather?zip=${zipCode},us&appid=${weatherAppId}&units=imperial`;

    return this.httpClient.get<IRoot>(apiUrl)
      .pipe(
        retry(3)
      );
  }

  getForecastForZipCode(zipCode: string|null) : Observable<IForecast> {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/';
    const weatherAppId = '5a4b2d457ecbef9eb2a71e480b947604'
    const apiUrl = `${weatherApiUrl}forecast?zip=${zipCode},us&appid=${weatherAppId}&units=imperial`;

    return this.httpClient.get<IForecast>(apiUrl)
      .pipe(
        retry(3)
      );
  }  

  getImageName = (weather: string): string => {
    switch (weather.toLowerCase()) {
      case 'rain':
        return RAIN;
      case 'sun':
      case 'clear':
        return SUN;
      case 'snow':
        return SNOW;
      case 'clouds':
        return CLOUDS;

      default:
        return SUN;
    }
  }
}
