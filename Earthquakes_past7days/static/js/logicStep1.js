// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps. Street and Dark keys set the textin index.html.
// their values reference the tile layers. A toggle option is created in index.html.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],    //Center of the USA
  zoom: 3,
  layers: [streets]
})
// Pass our map layers into our Leaflet's control.layers & add to the map.
L.control.layers(baseMaps).addTo(map);
// // Then we add our 'graymap' tile layer to the map.
// light.addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
//----------------------------------------------------------------------------------------------------
// // Accessing the airport GeoJSON URL
// // * Having the tileLayer() method before accessing large datasets ensures 
// //   that the map gets loaded before the data is added to it
// let torontoHoods = "https://raw.githubusercontent.com/CLHollis/Mapping_Earthquakes/main/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// // Create a style for the lines.
// let myStyle = {
//   color: "blue",
//   fillColor: "yellow",
//   weight: 1
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
  
//     // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h3> Neighboorhood: " + feature.properties.AREA_NAME + "</h3>");
//     }
//   })
//   .addTo(map);
// });




