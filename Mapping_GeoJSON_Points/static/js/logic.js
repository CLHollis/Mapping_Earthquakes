// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {    //add pointToLayer function
//     //To better understand what is passed with the feature argument
//     console.log(feature);  
//     return L.marker(latlng)
//     //add a popup marker for each object in our GeoJSON data
//     //  Using dot notation, traverse through the JSON object to get the city
//     .bindPopup("<h2>" +  feature.properties.name + ", " + feature.properties.city + "</h2> <hr> <h3>Population " + feature.properties.country + "</h3>");  
//   }
// }).addTo(map);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {    //add pointToLayer function
    //see what is passed with the layer argument
    console.log(layer);  
    layer.bindPopup("<h2>" + "Airport code: " + " " + feature.properties.faa + "</h2> <hr> <h3>" + "Airport name: " + " " + feature.properties.name + "</h3>");  
  }
}).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// //If need to layer styles... UNTESTED! from https://stackoverflow.com/questions/62664915/using-multiple-layers-with-mapbox-gl-leaflet
// let streets = {},
//     attribution = 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     darkStyle = 'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
//     outdoors = 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
// layers.default = L.mapboxGL({
//   accessToken: API_KEY,
//   style: darkStyle
//   attribution: attribution,
//   pane: 'tilePane'
//   maxZoom: 18,
// });
// layers.default = L.mapboxGL({
//   accessToken: API_KEY,
//   style: outdoors
//   attribution: attribution,
//   pane: 'tilePane'
//   maxZoom: 18,
// });






