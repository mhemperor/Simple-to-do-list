const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY ="6bd0f8c29f0e82445ecb63d459babf46";

function getWeather (lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function (response) {
        return response.json();
    })
    .then(function (json){
        const temperature = json.main.temp;
        const city = json.name;
        weather.innerText = `${temperature}℃ @ ${city}`;
    });
}

function saveCoords (coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function geoSuccess (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}
function geoFail() {
    console.log("Accession Fail!")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
}
function getCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }
    else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    getCoords();
}

init();