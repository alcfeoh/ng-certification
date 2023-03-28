import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ForecastComponent } from './forecast/forecast.component';
import { SearchComponent } from './components/search/search.component';
import { MinMaxComponent } from './components/min-max/min-max.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent,     
    ForecastComponent,
    SearchComponent,
    WeatherComponent,
    WeatherListComponent,
    MinMaxComponent,
    HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
