export interface IForecast {
  city: IForecastCity
  cod: string
  message: number
  cnt: number
  list: IForecastList[]
}

export interface IForecastCity {
  id: number
  name: string
  coord: IForecastCoord
  country: string
  population: number
  timezone: number
}

export interface IForecastCoord {
  lon: number
  lat: number
}

export interface IForecastList {
  dt: number
  sunrise: number
  sunset: number
  temp: IForecastTemp
  feels_like: IForecastFeelsLike
  pressure: number
  humidity: number
  weather: IForecastWeather[]
  speed: number
  deg: number
  gust: number
  clouds: number
  pop: number
  rain?: number
}

export interface IForecastTemp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface IForecastFeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface IForecastWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface IFiveDayForecast {
  main: string|undefined;
  temp_min: number|undefined;
  temp_max: number|undefined;
  temperatureDate: number|undefined;
  imageName: string;
}