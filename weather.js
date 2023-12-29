// const apiKey = "5b5e0b1c933ed5ff058ba62ede3c8554";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=5b5e0b1c933ed5ff058ba62ede3c8554&q=";

const waetherIcon = document.querySelector('.weatherIcon');
let weather = document.querySelector('.weather');
const cityName = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

async function checkWeather(city){
    const response = await fetch(apiUrl + city);
    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerText = data.name;
    document.querySelector('.temp').innerText = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerText = data.main.humidity + '%';
    document.querySelector('.wind').innerText = Math.round(data.wind.speed) + ' km/h';

    waetherIcon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + '.png';

}

searchButton.onclick = function(){
    checkWeather(cityName.value);
    weather.classList.add('show');
    cityName.value = '';
}

// checkWeather('london')
