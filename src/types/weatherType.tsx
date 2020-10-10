export type currentweatherType = {
  temp?: string;
  windSpeed?: string;
  humidity?: string;
  weatherIcon?: string;
  description?: string;
};

export type dailyWeatherType = Array<{
  id?: string;
  dt?: string;
  temp_day?: string;
  temp_eve?: string;
  temp_night?: string;
  temp_morning?: string;
  temp_min?: string;
  temp_max?: string;
  windSpeed?: string;
  humidity?: string;
  sunrise?: string;
  sunset?: string;
  weatherIcon?: string;
  description: string;
}>;

export type hourlyWeatherType = Array<{
  dt?: string;
  temp?: string;
  windSpeed?: string;
  humidity?: string;
  feels_like?: string;
}>;
