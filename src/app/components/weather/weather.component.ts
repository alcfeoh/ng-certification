import { Component, Input, OnInit } from '@angular/core';
import { IRootWeather } from '../../models/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weather: IRootWeather;
  constructor() { }

  ngOnInit(): void {
  }
}
