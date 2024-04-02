/* eslint-disable no-new */

// eslint-disable-next-line import/no-extraneous-dependencies
import Chart from 'chart.js/auto'

function createCurrentTemperatureCard(temperature_unit_c,temperature) {
    const current_temperature = document.createElement('div')
    current_temperature.classList.add('current-temperature')
    if (temperature_unit_c === true) {
        current_temperature.textContent = `${temperature  }°C`
    } else {
        current_temperature.textContent = `${temperature  }°F`
    }
    return current_temperature
}

function createCurrentConditionCard(condition_icon,condition_text) {
    const current_condition = document.createElement('div')
    current_condition.classList.add('current-condition')
    current_condition.innerHTML = `<img src="${condition_icon}" alt="current_condition_icon" height="50px" width="50px"> <span class="current_condition_text">${condition_text}</span>`
    return current_condition

}
function createMaxTemperatureCard(temperature_unit_c,max_temp){
    const max_temperature =  document.createElement('div')
    max_temperature.classList.add('max-temperature')
    if (temperature_unit_c === true) {
        max_temperature.textContent = `Max: ${max_temp  }°C`
    } else {
        max_temperature.textContent = `Max: ${max_temp  }°F`
    }
    return max_temperature
}

function createMinTemperatureCard(temperature_unit_c,min_temp){
    const min_temperature =  document.createElement('div')
    min_temperature.classList.add('min-temperature')
    if (temperature_unit_c === true) {
        min_temperature.textContent = `Min: ${min_temp  }°C`
    } else {
        min_temperature.textContent = `Min: ${min_temp  }°F`
    }
    return min_temperature
}

function createCurrentStatusCard(temperature_unit_c,temperature,condition_icon,condition_text,forecast_today_max_temperature,forecast_today_min_temperature) {
    const current_card = document.createElement('div')
    current_card.classList.add('current-condition-card')
    const current_temperature = createCurrentTemperatureCard(temperature_unit_c,temperature)
    current_card.appendChild(current_temperature)
    const current_condition = createCurrentConditionCard(condition_icon,condition_text)
    current_card.appendChild(current_condition)
    const max_temperature = createMaxTemperatureCard(temperature_unit_c,forecast_today_max_temperature)
    current_card.appendChild(max_temperature)
    const min_temperature = createMinTemperatureCard(temperature_unit_c,forecast_today_min_temperature)
    current_card.appendChild(min_temperature)
    return current_card 
}


function createFeelslikeCard(temperature_unit_c,feelslike) {
    const current_feelslike = document.createElement('div')
    current_feelslike.id = 'current-feelslike'
    current_feelslike.classList.add('card')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>thermometer-lines</title><path d="M17 3H21V5H17V3M17 7H21V9H17V7M17 11H21V13H17.75L17 12.1V11M21 15V17H19C19 16.31 18.9 15.63 18.71 15H21M7 3V5H3V3H7M7 7V9H3V7H7M7 11V12.1L6.25 13H3V11H7M3 15H5.29C5.1 15.63 5 16.31 5 17H3V15M15 13V5C15 3.34 13.66 2 12 2S9 3.34 9 5V13C6.79 14.66 6.34 17.79 8 20S12.79 22.66 15 21 17.66 16.21 16 14C15.72 13.62 15.38 13.28 15 13M12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z" /></svg>Feels like'
    current_feelslike.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    if (temperature_unit_c === true) {
        content.textContent = `${feelslike}°C`
    } else {
        content.textContent  = `${feelslike}°F`
    }
    current_feelslike.appendChild(content)
    return current_feelslike
}

function createUVcard(uv) {
    const current_uv = document.createElement('div')
    current_uv.id = 'uv'
    current_uv.classList.add('card')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>sun-wireless</title><path d="M11 6C13.76 6 16 8.24 16 11S13.76 16 11 16 6 13.76 6 11 8.24 6 11 6M11 1L13.39 4.42C12.65 4.15 11.84 4 11 4S9.35 4.15 8.61 4.42L11 1M2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79L2.34 6M2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16M19.65 6L17.88 9.79C17.74 9 17.47 8.23 17.05 7.5C16.63 6.78 16.1 6.15 15.5 5.64L19.65 6M23 13H21C21 15.05 20.22 17.1 18.66 18.66C17.09 20.23 15.05 21 13 21V23C15.56 23 18.12 22 20.07 20.07S23 15.56 23 13M19 13H17C17 14 16.61 15.05 15.83 15.83C15.05 16.61 14 17 13 17V19C14.54 19 16.08 18.41 17.25 17.24C18.41 16.08 19 14.54 19 13" /></svg>UV'
    current_uv.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    content.textContent= `${uv}`
    current_uv.appendChild(content)
    return current_uv
}

function createHumidityCard(humidity) {
    const current_humidity = document.createElement('div')
    current_humidity.id = 'humidity'
    current_humidity.classList.add('card')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>water-percent</title><path d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z" /></svg>Humidity'
    current_humidity.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    content.textContent= `${humidity}%`
    current_humidity.appendChild(content)
    return current_humidity
}

function createWindCard(wind_speed_mph,wind_speed_kph,wind_direction) {
    const wind = document.createElement('div')
    wind.id = 'wind'
    wind.classList.add('card2')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>weather-windy</title><path d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" /></svg>Wind'
    wind.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    content.innerHTML= `<p> 
    ${wind_speed_mph} MPH <br/> 
    ${wind_speed_kph} KPH 
    </p> 
    <p>${wind_direction}</p>`
    wind.appendChild(content)

    return wind
}

function createSunriseSunsetCard(sunrise,sunset) {
    const sun = document.createElement('div')
    sun.id = 'sun'
    sun.classList.add('card2')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>weather-sunset</title><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z" /></svg>Sun'
    sun.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    content.innerHTML= `<p> 
    Sunrise: ${sunrise} <br/> 
    Sunset: ${sunset}
    </p> `
    sun.appendChild(content)
    return sun
}

function createRainCard(forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,paricipation_in,precip_mm) {
    const rain = document.createElement('div')
    rain.id = 'rain'
    rain.classList.add('card3')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg>Rain'
    rain.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    if (forecast_today_daily_will_it_rain === 0) {
        content.textContent = 'No Rain Today'
    } else if (forecast_today_daily_will_it_rain === 1) {
        content.innerHTML = `Chance of Rain: ${forecast_today_daily_chance_of_rain}% <br/> Precip: ${paricipation_in} inches (${precip_mm} mm)`
    }
    rain.appendChild(content)
    return rain
}

function createSnowCard(forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm) {
    const snow = document.createElement('div')
    snow.id = 'snow'
    snow.classList.add('card2')
    const title = document.createElement('p')
    title.classList.add('title')
    title.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20px" width="20px"><title>snowflake</title><path d="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" /></svg>Snow'
    snow.appendChild(title)
    const content = document.createElement('p')
    content.classList.add('content')
    if (forecast_today_daily_will_it_snow === 0) {
        content.textContent = 'No Snow Today'
    } else if (forecast_today_daily_will_it_snow === 1) {
        content.textContent = `Chance of Snow: ${forecast_today_daily_chance_of_snow}% <br/> Snow: ${totalsnow_cm} cm`
    }
    snow.appendChild(content)
    return snow
}

function createTemperatureLineChart(temperature_unit_c,label,data) {
    const ctx = document.getElementById('hourly-temp').getContext('2d');
    if (temperature_unit_c ===true) {
        // eslint-disable-next-line no-new
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                    label: 'Temperature',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data.temperature,

                    fill: false,
                }, {
                    label: 'Feels Like (°C)',
                    borderColor: 'rgb(255, 235, 59)',
                    data: data.feelslike,
                    fill: false,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'whitesmoke'
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time (hours)',
                            color: 'whitesmoke' // Y-axis label color
                        },
                        ticks: {
                            color: 'whitesmoke' // X-axis tick color
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)',
                            color: 'whitesmoke' // Y-axis label color
                        },
                        ticks: {
                            color: 'whitesmoke' // X-axis tick color
                        }
                    }
                }
            }
        });
    } else {
        // eslint-disable-next-line no-new
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                    label: 'Temperature',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data.temperature,

                    fill: false,
                }, {
                    label: 'Feels Like (°F)',
                    borderColor: 'rgb(255, 235, 59)',
                    data: data.feelslike,
                    fill: false,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'whitesmoke'
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time (hours)',
                            color: 'whitesmoke' // Y-axis label color
                        },
                        ticks: {
                            color: 'whitesmoke' // X-axis tick color
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°F)',
                            color: 'whitesmoke' // Y-axis label color
                        },
                        ticks: {
                            color: 'whitesmoke' // X-axis tick color
                        }
                    }
                }
            }
        });
    }
    
}

function createRainSnowChart(label,data) {
    const ctx = document.getElementById('hourly-rain').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label, // Assuming x-axis represents hours from 0 to 23
            datasets: [{
                label: 'Possibility of Raining(%)',
                type: 'line',
                borderColor: 'rgb(167, 186, 225)',
                data: data.rain_chance,
                fill: false,
                yAxisID: 'rain/snow-y-axis'
            }, {
                label: 'Possibility of Snowing(%)',
                type: 'line',
                borderColor: 'rgb(215, 243, 115)',
                data: data.snow_chance,
                fill: false,
                yAxisID: 'rain/snow-y-axis'
            }, {
                label: 'Precipitation(mm)',
                backgroundColor: 'rgb(50, 66, 166)',
                borderWidth: 1,
                data: data.rain_precip_mm,
            }, ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'whitesmoke'
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time (hours)',
                        color: 'whitesmoke' // X-axis label color
                    },
                    ticks: {
                        color: 'whitesmoke' // X-axis tick color
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Precipitation(mm)',
                        color: 'whitesmoke' // Y-axis label color
                    },
                    ticks: {
                        color: 'whitesmoke' // Y-axis tick color
                    }
                },
                'rain/snow-y-axis': {
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Possibility of Raining/Snowing(%)',
                        color: 'whitesmoke' // Y-axis label color
                    },
                    ticks: {
                        color: 'whitesmoke' // Y-axis tick color
                    }
                }
            }
        }
    });
}



export function displayCurrentLocation(city,state,country) {
    const current_location = document.querySelector('.current-location')
    current_location.innerHTML = ''
    current_location.innerHTML = `<p class='city'>${city}</p> <p class='state-country'>${state}, ${country}</p>`
}

export function displayCurrentStatus(temperature_unit_c,temperature,condition_icon,condition_text,forecast_today_max_temperature,forecast_today_min_temperature) {
    const current_weather = document.querySelector('.current-weather')
    const current_card = createCurrentStatusCard(temperature_unit_c,temperature,condition_icon,condition_text,forecast_today_max_temperature,forecast_today_min_temperature)
    current_weather.appendChild(current_card)
}

export function displayCurrentCondition(temperature_unit_c,feelslike,uv,humidity,wind_speed_kph,wind_speed_mph,wind_direction) {
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
export function displayTodayForcastCondition(forecast_today_sunrise,forecast_today_sunset,forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm,forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm) {
    const cards = document.querySelector('.cards')

    const sun = createSunriseSunsetCard(forecast_today_sunrise,forecast_today_sunset)
    cards.appendChild(sun)

    const rain = createRainCard(forecast_today_daily_chance_of_rain,forecast_today_daily_will_it_rain,precip_in,precip_mm)
    cards.appendChild(rain)

    const snow = createSnowCard(forecast_today_daily_chance_of_snow,forecast_today_daily_will_it_snow,totalsnow_cm)
    cards.appendChild(snow)
}



export function displayHourlyTemperature(temperature_unit_c,hourly_data) {
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
export function displayHourlyRainSnow(hourly_data) {
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
    createRainSnowChart(x,data)
}


