import './style.css';
import {weather_api_key} from '../api.config'
import {createFeelslikeCard, createUVcard, createHumidityCard, createWindCard, createCurrentStatusCard, createSunriseSunsetCard, createRainCard, createSnowCard, createTemperatureLineChart, createRainSnowChart} from './card'

function displayCurrentLocation(city,state,country) {
    const current_location = document.querySelector('.current-location')
    current_location.innerHTML = ''
    current_location.innerHTML = `<p class='city'>${city}</p> <p class='state-country'>${state}, ${country}</p>`
}

function displayCurrentStatus(temperature_unit_c,temperature,condition_icon,condition_text,forecast_today_max_temperature,forecast_today_min_temperature) {
    const current_weather = document.querySelector('.current-weather')
    const current_card = createCurrentStatusCard(temperature_unit_c,temperature,condition_icon,condition_text,forecast_today_max_temperature,forecast_today_min_temperature)
    current_weather.appendChild(current_card)
}

function displayCurrentCondition(temperature_unit_c,feelslike,uv,humidity,wind_speed_kph,wind_speed_mph,wind_direction) {
    const current_weather = document.querySelector('.current-weather')
    
    const cards = document.createElement('div')
    cards.classList.add('cards')
    current_weather.appendChild(cards)

    const current_feelslike = createFeelslikeCard(temperature_unit_c,feelslike)
    cards.appendChild(current_feelslike)

    const current_uv = createUVcard(uv)
    cards.appendChild(current_uv)

    const current_humidity = createHumidityCard(humidity)
    cards.appendChild(current_humidity)
    
    const wind = createWindCard(wind_speed_mph,wind_speed_kph,wind_direction)
    cards.appendChild(wind)

}
function displayTodayForcastCondition(forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm) {
    const cards = document.querySelector('.cards')

    const sun = createSunriseSunsetCard(forecast_today_sunrise,forecast_today_sunset)
    cards.appendChild(sun)

    const rain = createRainCard(forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm)
    cards.appendChild(rain)

    const snow = createSnowCard(forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm)
    cards.appendChild(snow)
}



function displayHourlyTemperature(temperature_unit_c,hourly_data) {
    const current_weather = document.querySelector('.current-weather')
    const hourly_temp = document.createElement('canvas')
    hourly_temp.id = 'hourly-temp'
    hourly_temp.classList.add('chart')
    current_weather.appendChild(hourly_temp)
    // eslint-disable-next-line prefer-const
    let x = []
    // eslint-disable-next-line prefer-const
    let temperature_c = []
    // eslint-disable-next-line prefer-const
    let temperature_f = []
    // eslint-disable-next-line prefer-const
    let feelslike_c = []
    // eslint-disable-next-line prefer-const
    let feelslike_f = []
    // eslint-disable-next-line no-restricted-syntax
    for (const hour of hourly_data){
        const time = hour.time.split(' ')[1]
        x.push(time)
        temperature_c.push(hour.temp_c)
        temperature_f.push(hour.temp_f)
        feelslike_c.push(hour.feelslike_c)
        feelslike_f.push(hour.feelslike_f)
    }
    const data_c = {
        temperature: temperature_c,
        feelslike: feelslike_c
    }
    const data_f = {
        temperature: temperature_f,
        feelslike: feelslike_f
    }
    if (temperature_unit_c === true) {
        createTemperatureLineChart(true,x,data_c)
    } else {
        createTemperatureLineChart(false,x,data_f)
    }
    
}
function displayHourlyRainSnow(hourly_data) {
    const current_weather = document.querySelector('.current-weather')
    const hourly_rain = document.createElement('canvas')
    hourly_rain.id = 'hourly-rain'
    hourly_rain.classList.add('chart')
    current_weather.appendChild(hourly_rain)
    // eslint-disable-next-line prefer-const
    let x = []
    // eslint-disable-next-line prefer-const
    let rain_chance = []
    // eslint-disable-next-line prefer-const
    let rain_precip_mm = []
    // eslint-disable-next-line prefer-const
    let snow_chance = []
    // eslint-disable-next-line no-restricted-syntax
    for (const hour of hourly_data){
        const time = hour.time.split(' ')[1]
        x.push(time)
        rain_chance.push(hour.chance_of_rain)
        rain_precip_mm.push(hour.precip_mm)
        snow_chance.push(hour.chance_of_snow)
    }
    const data = {
        rain_chance,
        rain_precip_mm,
        snow_chance
    }
    console.log(data)
    createRainSnowChart(x,data)
}


// function displayHourlySnow()

function unitSelectionEvent(current_temperature_c,current_temperature_f,condition_icon,condition_text,current_feelslike_c,current_feelslike_f,uv,humidity,current_wind_kph,current_wind_mph,wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm,hourly_data) {
    const unit = document.querySelector('.temperature-toggler')
    unit.addEventListener('change', () => {
        const current_weather = document.querySelector('.current-weather')
        current_weather.innerHTML = ''
        if (unit.checked) {
            console.log('Temperature unit selected: Fahrenheit (°F)');
            displayCurrentStatus(false,current_temperature_f,condition_icon,condition_text,forecast_today_max_temperature_f,forecast_today_min_temperature_f)
            displayCurrentCondition(false,current_feelslike_f,uv,humidity,current_wind_kph,current_wind_mph,wind_direction)
            displayTodayForcastCondition(forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm)
            displayHourlyTemperature(false,hourly_data)
            displayHourlyRainSnow(hourly_data)
        } else {
            console.log('Temperature unit selected: Celsius (°C)');
            displayCurrentStatus(true,current_temperature_c,condition_icon,condition_text,forecast_today_max_temperature_c,forecast_today_min_temperature_c)
            displayCurrentCondition(true,current_feelslike_c,uv,humidity,current_wind_kph,current_wind_mph,wind_direction)
            displayTodayForcastCondition(forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm)
            displayHourlyTemperature(true,hourly_data)
            displayHourlyRainSnow(hourly_data)
        }
    })
}





async function getWeather(location){
    const header = new Headers();
    const request = new Request(`http://api.weatherapi.com/v1/forecast.json?key=${ weather_api_key }&q=${ location }&days=3&aqi=no&alerts=no`,{
        method: 'GET',
        headers: header,
        mode: 'cors'
    })
    const result = await fetch(request)
    const data = await result.json()
    console.log(data.forecast)
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

    displayCurrentLocation(current_city,current_state,current_country)
    displayCurrentStatus(true,current_temperature_c,current_condition_icon_link,current_condition_text,forecast_today_max_temperature_c,forecast_today_min_temperature_c) 
    displayCurrentCondition(true,current_feelslike_c,current_uv,current_humidity,current_wind_kph,current_wind_mph,current_wind_direction)
    unitSelectionEvent(current_temperature_c,current_temperature_f,current_condition_icon_link,current_condition_text,current_feelslike_c,current_feelslike_f,current_uv,current_humidity,current_wind_kph,current_wind_mph,current_wind_direction,forecast_today_max_temperature_c,forecast_today_max_temperature_f,forecast_today_min_temperature_c,forecast_today_min_temperature_f,forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,snow_cm,hourly_data)
    displayTodayForcastCondition(forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,snow_cm)
    displayHourlyTemperature(true,hourly_data)
    displayHourlyRainSnow(hourly_data)
}

getWeather('New York')


