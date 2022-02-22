// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center (somewhere between LAX & SFO) & zoom level.
//   'mapid' refrences: <div id="mapid"></div>
let map = L.map('mapid').setView([39.8283, -98.5795], 5);
                            //geographic center of the USA

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],  //SFO coordinates
    [30.1975, -97.6664],   //AUS coordinates
    [38.7499, -90.3748],   //STL coordinates
    [43.6777, -79.6248],   //YYZ coordinates
    [40.6413, -73.7781]    //JFK coordinates
];

  // Create a polyline using the line coordinates and make the line.
L.polyline(line, {       //dashed line, and make it...
    weight: 4,           //thickness 
    opacity: 0.5,        //opacity 
    dashArray: "10,20",  //dashed-line
    color: "blue"        //yellow
  }).addTo(map);

// We create the tile layer that will be the background of our map.
// Change to dark style: streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

