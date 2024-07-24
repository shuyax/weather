import './style.css';
// eslint-disable-next-line import/named
import {showWeather, updateWeather} from './display'


function unitSelectionEvent(current_temperature_c,current_temperature_f,condition_icon,condition_text,current_feelslike_c,current_feelslike_f,uv,humidity,current_wind_kph,current_wind_mph,wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm,hourly_data) {
    const unit = document.querySelector('.temperature-toggler')
    unit.addEventListener('change', () => {
        const current_weather = document.querySelector('.current-weather')
        current_weather.innerHTML = ''
        if (unit.checked) {
            console.log('Temperature unit selected: Fahrenheit (°F)');
            updateWeather(
                false,
                current_temperature_c,current_temperature_f,condition_icon,condition_text,current_feelslike_c,current_feelslike_f,uv,humidity,current_wind_kph,current_wind_mph,wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm,hourly_data
                ) 
        
        } else {
            console.log('Temperature unit selected: Celsius (°C)');
            updateWeather(
                true,
                current_temperature_c,current_temperature_f,condition_icon,condition_text,current_feelslike_c,current_feelslike_f,uv,humidity,current_wind_kph,current_wind_mph,wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm,hourly_data
                ) 
        }
    })
}




async function getWeather(location){
    if (location == null) {
        location = 'Pittsburgh'
    }
    const header = new Headers();
    const request = new Request(`http://192.3.81.56:5000/data?location=${location}`,{
        method: 'GET',
        headers: header,
        mode: 'cors'
    })
    try {
        const result = await fetch(request)
        if (!result.ok) {
            throw new Error('Network response was not OK')
        }
        const data = await result.json()
        const current_condition_text = data.current.condition.text
        const current_condition_icon_link = data.current.condition.icon
        const current_feelslike_c = data.current.feelslike_c
        const current_feelslike_f = data.current.feelslike_f
        const current_temperature_c = data.current.temp_c
        const current_temperature_f = data.current.temp_f
        const current_uv = data.current.uv
        const current_humidity = data.current.humidity
        const current_wind_direction = data.current.wind_dir
        const current_wind_kph = data.current.wind_kph
        const current_wind_mph = data.current.wind_mph
        const current_city = data.location.name
        const current_state = data.location.region
        const current_country = data.location.country
        const forecast_today_sunrise = data.forecast.forecastday[0].astro.sunrise
        const forecast_today_sunset = data.forecast.forecastday[0].astro.sunset
        const forecast_today_max_temperature_c = data.forecast.forecastday[0].day.maxtemp_c
        const forecast_today_max_temperature_f = data.forecast.forecastday[0].day.maxtemp_f
        const forecast_today_min_temperature_c = data.forecast.forecastday[0].day.mintemp_c
        const forecast_today_min_temperature_f = data.forecast.forecastday[0].day.mintemp_f
        const forecast_today_daily_chance_of_rain = data.forecast.forecastday[0].day.daily_chance_of_rain
        const forecast_today_daily_will_it_rain = data.forecast.forecastday[0].day.daily_will_it_rain
        const forecast_today_daily_chance_of_snow = data.forecast.forecastday[0].day.daily_chance_of_snow
        const forecast_today_daily_will_it_snow = data.forecast.forecastday[0].day.daily_will_it_snow
        const precip_in = data.forecast.forecastday[0].day.totalprecip_in
        const precip_mm = data.forecast.forecastday[0].day.totalprecip_mm
        const snow_cm = data.forecast.forecastday[0].day.totalsnow_cm
        const hourly_data = data.forecast.forecastday[0].hour
        showWeather(current_city,current_state,current_country,current_temperature_c,current_temperature_f,current_condition_icon_link,current_condition_text,current_feelslike_c,current_feelslike_f,current_uv,current_humidity,current_wind_kph,current_wind_mph,current_wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,snow_cm,hourly_data)
        unitSelectionEvent(current_temperature_c,current_temperature_f,current_condition_icon_link,current_condition_text,current_feelslike_c,current_feelslike_f,current_uv,current_humidity,current_wind_kph,current_wind_mph,current_wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,snow_cm,hourly_data)
    } catch (error) {
        console.log(error)
    }
    
}




function searchLocationEvent(){
    const search = document.getElementById('search')
    search.addEventListener('click', (event) => {
        event.preventDefault()
        const location_input = document.getElementById('searchInput')
        if (location_input.value != null){
            getWeather(location_input.value)
        }
        location_input.value=''
    })
}

searchLocationEvent()
getWeather()
