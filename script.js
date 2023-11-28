let container = document.querySelector(".container");
let searchBox = document.querySelector(".search-box");
let searchBtn = document.querySelector("#searchBtn");
let weatherBox = document.querySelector(".weather-box");
let error404 = document.querySelector(".not-found");
let weatherDetails = document.querySelector(".weather-details");

let apiKey = "922bcbf1125dc39bad94895c98a2d448";
let lat, lon;

let part = 'hourly';

getLocation()


function getLocation() {
    try{
        navigator.geolocation.getCurrentPosition(ShowPosition);
    } catch {
        return;
    }
}

function ShowPosition(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(json => {
            getWeather(json[0].name)
        });
}

searchBtn.addEventListener("click", calcWeather);

document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        calcWeather()
    }
})

function calcWeather() {
    let cityTarget = document.getElementById('locationName').value;

    if (cityTarget.trim() == "") {
        return;
    } else {
        getWeather(cityTarget);
    }
}


function getWeather(city){

    weatherBox.classList.remove("fadeIn")
    weatherDetails.classList.remove("fadeIn")
}