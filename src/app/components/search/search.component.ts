import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  get zipCodeValidation() { return this.formGroup.get('zipCode'); }

  constructor(private storageService: StorageService,
    private weatherService: WeatherService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      zipCode: [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    this.weatherList = this.storageService.getItem('zipCodeWeatherData') ?? new Array<IRootWeather>();
  }

  addLocation() {
    this.zipCode = this.formGroup.get('zipCode')?.value;
    this.weatherService.getWeatherForZipCode(this.zipCode)
      .subscribe({
        next: (response) => {
          this.weatherForZipCode = response;
          console.log('weather for zip code:')
          console.log(this.weatherForZipCode);
          this.weatherForZipCode.zipCode = this.zipCode;
          this.weatherForZipCode.imageName = this.weatherService.getImageName(this.weatherForZipCode.weather[0].main);
          this.weatherList.push(this.weatherForZipCode);
          this.storageService.removeItem('zipCodeWeatherData');
          this.storageService.setItem('zipCodeWeatherData', this.weatherList);
        }
      });
  }
}
