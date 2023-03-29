import { Component, Input, OnInit } from '@angular/core';
import { IRootWeather } from '../../models/weather.interface';
import { StorageService } from '../../services/storage.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() weatherList: Array<IRootWeather>;
  constructor(private storageService: StorageService,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  removeZipCode(zipCode: string) {
    this.weatherList = this.weatherList.filter(x => x.zipCode !== zipCode);
    this.storageService.removeItem('zipCodeWeatherData');
    this.storageService.setItem('zipCodeWeatherData', this.weatherList);
  }
}
