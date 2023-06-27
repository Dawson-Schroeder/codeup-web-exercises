
const getWeather = async (long = -98.4895844, lat = 29.4267901) =>{
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}

(async()=>{
    let weatherData = await getWeather();
    makeCard(weatherData);
    })();

let currentMarker;
    document.querySelector('#setMarkerButton').addEventListener('click', async(e)=> {
    e.preventDefault();
    const address = document.querySelector('#setMarker').value;
    let coords = await geocode(address, MAPBOX_API_TOKEN)
        if (currentMarker) {
            currentMarker.remove();
        }
        currentMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
        let weatherData = await getWeather(coords[0], coords[1]);
        makeCard(weatherData);

    });

let makeCard = function(weatherData){
    document.querySelector('#current-city').innerHTML = '';
    document.querySelector('#box').innerHTML = '';
    console.log(weatherData)
    for(let i = 0 ; i < weatherData.list.length; i++) {
        let cardDisplay = document.querySelector('#box').innerHTML +=  `
      
        <div class="weather-box">
            <div class="column">
                <div class="head">
                    <p class="card-header">${weatherData.list[i].dt_txt}</p>
                </div>
            </div>
            <div class="column weather-box-icon">
                <p class="card-body">${ weatherData.list[i].weather[0].icon}</p>
            </div>
            <div class="column">
                <p class="card-body">Temperature: ${weatherData.list[i].main.temp}</p>
                <p class="card-body">Description: ${weatherData.list[i].weather[0].description}</p>
                <p class="card-body">Humidity: ${weatherData.list[i].main.humidity}</p>
                <p class="card-body">Wind: ${weatherData.list[i].wind.deg}</p>
                <p class="card-body">Pressure: ${weatherData.list[i].main.pressure}</p>
            </div>
        </div>
     
  `;
        let city = weatherData.city.name;
        let cityDisplay = document.querySelector('#current-city').innerHTML = `
        <h1 class="current-city" id="current-city">Current city: ${city}</h1>       
   `;
    }
}



