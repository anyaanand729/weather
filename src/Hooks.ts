import { useEffect, useState } from 'react'

export function useAutoComplete(place:string|null) {
    const[autoCompleteList, setList] = useState<{city:string}[]>([]);
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
    const[searchList, setSearch] = useState<{state: string, city:string, lat:number, long:number}>();
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
    const [weatherLoc, setWeatherLoc] = useState<{long:number, lat:number}[]>([]);
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