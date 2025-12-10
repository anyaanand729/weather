import { useEffect, useState } from 'react'

export function useAutoComplete(place:string|null) {
    const[autoCompleteList, setList] = useState<{city:string, state:string, formatted:string}[]>([]);
    useEffect(()=> {
        if(place && place!=" ")
        fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+ place +"&type=city&limit=10&filter=countrycode%3Aus&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658")
            .then((res) => res.json())
            .then((data)=>{
                setList(data.results)
                console.log("auto", data)
            })
            .catch((error) => console.log(error));
    }, [place]);

    return autoCompleteList
}
export function useSearch(city:string|null) {
    const[searchList, setSearch] = useState<{lat:number, lon:number}>();
        useEffect(()=> {
            if(city && city!=" ")
                fetch("https://api.geoapify.com/v1/geocode/search?text="+city+"&lang=en&limit=1&type=city&filter=countrycode:us&format=json&apiKey=b8568cb9afc64fad861a69edbddb2658")
            .then((res) => res.json())
            .then((data)=>{
                setSearch(data.results[0])
                console.log("search", data)
            })
            .catch((error) => console.log(error));
    }, [city]);
    return searchList
}
export function useWeatherLoc(long:number|null, lat:number|null) {
    const [weatherLoc, setWeatherLoc] = useState<
        {
            lon:number;
            lat:number;
            generationtime_ms: number;
            utc_offset_seconds: number;
            timezone: string;
            timezone_abbreviation: string;
            elevation: number;
            current_units: {
                time: string;
                interval: string;
                temperature_2m: string;
                relative_humidity_2m: string;
                apparent_temperature: string;
                is_day: boolean;
                wind_speed_10m: string;
                wind_direction_10m: string;
                wind_gusts_10m: string;
                precipitation: string;
                weather_code: string;
            };
            current: {
                time: string;
                interval: number;
                temperature_2m: number;
                relative_humidity_2m: number;
                apparent_temperature: number;
                is_day: boolean;
                wind_speed_10m: number;
                wind_direction_10m: number;
                wind_gusts_10m: number;
                precipitation: number;
                weather_code: number;
            };
            hourly_units: {
                time: string;
                temperature_2m: string;
                relative_humidity_2m: string;
                dew_point_2m: string;
                apparent_temperature: string;
                precipitation_probability: string;
                weather_code: string;
                visibility: string;
                wind_speed_10m: string;
                wind_direction_10m: string;
                wind_gusts_10m: string;
                precipitation: string;
                uv_index: string;
                is_day: boolean;
            }
        }[]>([]);
    useEffect(()=> {
        if((lat || lat==0) && (long && long == 0))
            fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&daily=weather_code,temperature_2m_min,temperature_2m_max,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,wind_gusts_10m_max&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,weather_code,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,uv_index,is_day&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch")
            .then((res) => res.json())
            .then((data)=>{
                setWeatherLoc(data)
                console.log("coords", data)
            })
            .catch((error) => console.log(error));
    }, [long, lat]);
    return weatherLoc;
}