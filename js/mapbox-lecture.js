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

// set center to bring the map to the pin you dropped