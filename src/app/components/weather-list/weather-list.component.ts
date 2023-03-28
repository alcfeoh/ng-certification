import { Component, Input, OnInit } from '@angular/core';
import { IRoot } from '../../models/weather.interface';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() weatherList: Array<IRoot>;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  removeZipCode(zipCode: string) {
    this.weatherList = this.weatherList.filter(x => x.zipCode !== zipCode);
    this.storageService.removeItem('zipCodeWeatherData');
    this.storageService.setItem('zipCodeWeatherData', this.weatherList);
  }
}
