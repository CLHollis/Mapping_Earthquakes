// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//   'mapid' refrences: <div id="mapid"></div>
                                //center around LA @ zoom 14
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// //Alternate method:
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5           //latitude, longitude
//     ],
//     zoom: 4                 //scale 0-80
//   });

// Add a marker Leaflet starter code
// var marker = L.marker([51.5, -0.09]).addTo(map);
// Our version...Add a [map] marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a [circle] marker to the map for Los Angeles, California
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "#black",        //circle color: black
    fillColor: "#ffffa1"    //circle outline: yellow
 }).addTo(map);

// We create the tile layer that will be the background of our map.
                             // SKILL DRILL: Change to dark style: dark-v10
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

