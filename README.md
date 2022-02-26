# Create an Interactive World Earthquake Map
### Include the following:
- past 7 days activity
- each earthquake has a pop-up with Magnitude and 
- Multiple view that the user can toggle between (Streets, Sattelite, Terrain, Dark, Night)
- Multiple bits of information that can be added or removed from the map, aka overlays (All Earthquakes, Tectonic Plates, Major Earthquakes[only with 4.5+ magnitude])
- Add a legend (top is for Major Earthquakes, bottom is for All Earthquakes)
- ### Extra Findings: By changing the opacity of the circleMarkers, you can see where the earthquake took place easier geographically, especially when zoomed-in.

## Programs Used
- Python 3.7.6
- JavaScript 1.7
- Visual Studio Code, 1.63.0
- GeoJSON data
- Mapbox API
- Leaflet 1.7.1 API
- D3 Library

## Data Sources 
- [All Earthquakes past 7 days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) 
- [4.5+ Magnitude past 7 days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)
- [Tectonic Plates](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

## Code
[HTML](Earthquake_Challenge/index.html)
[JavaScript](Earthquake_Challenge/static/js/challenge_logic.js)
[CSS Style](Earthquake_Challenge/static/css/style.css)

## Snapshots
<image src="images/Ter_T.JPG" width="700" height="350">
<image src="images/Dark_TM.JPG" width="700" height="350">
<image src="images/Sat_AT.JPG" width="700" height="350">
<image src="images/Sat_M_Indochina_zoom.JPG" width="700" height="350">
<image src="images/Streets_ATM_Aopacity.5.JPG" width="700" height="350">
