import { Component, Input, OnInit } from '@angular/core';
import { IRootWeather } from '../../models/weather.interface';

@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.css']
})
export class MinMaxComponent implements OnInit {
  @Input() minTemperature: number;
  @Input() maxTemperature: number;
  constructor() { }

  ngOnInit(): void {
  }

}
