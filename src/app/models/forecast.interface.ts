export interface IForecast {
  cod: string
  message: number
  cnt: number
  list: IForecastList[]
  city: IForecastCity
}

export interface IForecastList {
  dt: number
  main: IForecastMain
  weather: IForecastWeather[]
  clouds: IForecastClouds
  wind: IForecastWind
  visibility: number
  pop: number
  rain?: IForecastRain
  sys: IForecastSys
  dt_txt: string
}

export interface IForecastMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface IForecastWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface IForecastClouds {
  all: number
}

export interface IForecastWind {
  speed: number
  deg: number
  gust: number
}

export interface IForecastRain {
  "3h": number
}

export interface IForecastSys {
  pod: string
}

export interface IForecastCity {
  id: number
  name: string
  coord: IForecastCoord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface IForecastCoord {
  lat: number
  lon: number
}

export interface IFiveDayForecast {
  main: string|undefined;
  temp_min: number|undefined;
  temp_max: number|undefined;
  temperatureDate: string|undefined;
  imageName: string;
}