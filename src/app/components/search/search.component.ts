import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { take, zip } from 'rxjs';
import { IRootWeather } from '../../models/weather.interface';
import { StorageService } from '../../services/storage.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public zipCode: string;
  weatherForZipCode: IRootWeather;
  zipCodeControl: FormControl;
  formGroup!: FormGroup;
  weatherList: Array<IRootWeather> = new Array<IRootWeather>();
  constructor(private storageService: StorageService,
    private weatherService: WeatherService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      zipCode: [null, null]
    });
    this.weatherList = this.storageService.getItem('zipCodeWeatherData')
  }

  addLocation() {
    this.zipCode = this.formGroup.get('zipCode')?.value;
    console.log(this.zipCode);
    this.weatherService.getWeatherForZipCode(this.zipCode)
      .subscribe({
        next: (response) => {
          this.weatherForZipCode = response;
          this.weatherForZipCode.zipCode = this.zipCode;
          this.weatherForZipCode.imageName = this.weatherService.getImageName(this.weatherForZipCode.weather[0].main);
          this.weatherList.push(this.weatherForZipCode);
          this.storageService.removeItem('zipCodeWeatherData');
          this.storageService.setItem('zipCodeWeatherData', this.weatherList);
        }
      });
  }
}
