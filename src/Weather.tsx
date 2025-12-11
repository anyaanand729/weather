import type {Weather} from './Hooks.ts'
import {useEffect, useState} from 'react'

export function Weather({weather}: {weather:Weather}){
    const [realWeather, updateIt] = useState<Weather>(weather)
    useEffect(()=>{
        updateIt(weather)}, [weather])
    return (
        <>
            <div>
            {realWeather.current.time}
            {realWeather.current.interval}
            {realWeather.current.temperature_2m}
            {realWeather.current.relative_humidity_2m}
            {realWeather.current.apparent_temperature}
            {realWeather.current.is_day}
            {realWeather.current.wind_speed_10m}
            {realWeather.current.wind_direction_10m}
            {realWeather.current.wind_gusts_10m}
            {realWeather.current.precipitation}
            {realWeather.current.weather_code}
            </div>

            {
                realWeather.hourly.time.map((_item, index) =>
                <div key={index}>
                    {realWeather.hourly.time[index]},
                    {realWeather.hourly.temperature_2m[index]},
                    {realWeather.hourly.relative_humidity_2m[index]},
                    {realWeather.hourly.dew_point_2m[index]},
                    {realWeather.hourly.apparent_temperature[index]},
                    {realWeather.hourly.precipitation_probability[index]},
                    {realWeather.hourly.weather_code[index]},
                    {realWeather.hourly.visibility[index]},
                    {realWeather.hourly.wind_speed_10m[index]},
                    {realWeather.hourly.wind_direction_10m[index]},
                    {realWeather.hourly.wind_gusts_10m[index]},
                    {realWeather.hourly.precipitation[index]},
                    {realWeather.hourly.uv_index[index]},
                    {realWeather.hourly.is_day[index]}


                </div>)
            }
            {
                realWeather.daily.time.map((_item, index) =>
                <div key={index}>
                    {realWeather.daily.time[index]},
                    {realWeather.daily.apparent_temperature_max[index]},
                    {realWeather.daily.apparent_temperature_min[index]},
                    {realWeather.daily.precipitation_hours[index]},
                    {realWeather.daily.precipitation_probability_max[index]},
                    {realWeather.daily.precipitation_sum[index]},
                    {realWeather.daily.sunset[index]},
                    {realWeather.daily.sunrise[index]},
                    {realWeather.daily.temperature_2m_max[index]},
                    {realWeather.daily.temperature_2m_min[index]},
                    {realWeather.daily.uv_index_max[index]},
                    {realWeather.daily.weather_code[index]},
                    {realWeather.daily.wind_gusts_10m_max[index]},
                    {realWeather.daily.wind_speed_10m_max[index]}
                </div>)
            }
        </>
    )
}