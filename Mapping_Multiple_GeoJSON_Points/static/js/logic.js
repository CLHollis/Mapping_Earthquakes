// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Create a base layer that holds both maps. Street and Dark keys set the textin index.html.
// their values reference the tile layers. A toggle option is created in index.html.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})
// Pass our map layers into our Leaflet's control.layers & add to the map.
L.control.layers(baseMaps).addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
// * Having the tileLayer() method before accessing large datasets ensures 
//   that the map gets loaded before the data is added to it
let airportData = "https://raw.githubusercontent.com/CLHollis/Mapping_Earthquakes/main/Mapping_Multiple_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});

// //SKILL DRILL ...can't figure out
// //  Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names 
// //  for both the Street and Dark layers.
// //Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {    //add pointToLayer function
//       //see what is passed with the layer argument
//       console.log(layer);  
//       layer.bindPopup("<h2>" + "Airport code: " + " " + feature.properties.faa + "</h2> <hr> <h3>" + "Airport name: " + " " + feature.properties.name + "</h3>");  
//     }
//   })
// }).addTo(map);


