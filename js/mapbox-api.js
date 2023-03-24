

document.getElementById("zoomSubmit").addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
});

document.getElementById("setMarkerButton").addEventListener('click', function(){
    const address = document.getElementById("setMarker").value;
    console.log(address);
    geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        console.log(coords);
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});

const restaurants = [
    {
        "name": "La Fogata Cantina" ,
        "address": "1133 Austin Hwy, San Antonio, TX 78209" ,
        "longitude": -98.4501228 ,
        "latitude": 29.4875257 ,

    }, {
        "name": "Daves Hot Chicken" ,
        "address": "9602 TX-151 Suite 108, San Antonio, TX 78251" ,
        "longitude": -98.6721249 ,
        "latitude": 29.445645 ,
    }, {
        "name": "Brothers On 2nd" ,
        "address": "90 N 2nd St, Platteville, WI 53818" ,
        "longitude": -90.476945 ,
        "latitude": 42.7346237 ,
    }
]

restaurants.forEach(function(restaurant){
    let longitude = restaurant.longitude
    let latitude = restaurant.latitude
    let address = restaurant.address
    let Rname = restaurant.name
    let newMarker = new mapboxgl.Marker()
        .setLngLat([ longitude , latitude ])
        .addTo(map);
    let newPopup = new mapboxgl.Popup()
        .setHTML(`
<div class="container back">
    <div class="row">
        <div class="column">
            <h3>${Rname}</h3>
            <p class="popup">Location: ${address}</p>
        </div>
    </div>
</div>
    `);
    newMarker.setPopup(newPopup)
});

document.querySelector('#clear-markers').addEventListener('click', event=>{
   document.querySelectorAll('svg').forEach(svg=>{
       svg.style.display = "none";
   });
});



// how to get some data on the page for weather.
const SALong = -98.2431234
const SALat = 29.125124
$.get(`https://api.openweathermap.org.data/2.5/weather?lat=${SALat}$lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(data=>{
    console.log(data);
    console.log("The Temp is: " + data.main.temp);
    $('#weather').html(`<p>The Temp is: ${data.main.temp}</p>`);
});

$.get(`https://api.openweathermap.org/data/2.5/forast/hourly?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(data=>{
    console.log(data);
});

$.get("http://api.openweathermap.org/data/2.5/forcast", {
    APPID: OPEN_WEATHER_APPID,
    lat: SALat,
    lon: SALong,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    data.list.forEach(forcast =>{
        if (index % 8 === 0 && index !== 0){
            // console.log(forecast.dt_txt);
            // console.log(forecast.weather[0].description);
            const time = new Date(forcast.dt * 1000);
            console.log(time.getHours());
            console.log(time.getTime());
            console.log(time.getDate());
        }
    });
});
