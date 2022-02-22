//Point has a single set of coordinates, 
//  like when we mapped a single marker to the map.
"geometry":{
    "type":"Point",
    "coordinates": [-118.4, 33.9]
    }

//MultiPoint is an array of point coordinates, 
//  like when we mapped multiple cities with their population to a map.
"geometry":{
    "type":"MultiPoint",
    "coordinates": [-118.4, 33.9], [-118.5, 34.0]
    }

//LineString has an array of Point coordinates, 
//  like when we mapped the airline route from LAX to SFO.
"geometry":{
    "type":"LineString",
    "coordinates": [[-118.4, 33.9],[-122.4, 37.6]]
    }

//MultiLineString are an array of LineString coordinates, 
//  like when we mapped the LAX-SFO-SLC-SEA airline route.
"geometry":{
    "type":"MultiLineString",
    "coordinates":
        [[-118.4, 33.9],[-106.4, 31.8]],
        [[-118.4, 33.9],[-123.2, 44.1]]
    }

//Polygon has an array of LineString coordinates. 
"geometry": {
    "type": "Polygon",
    "coordinates":
    [
    [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ]
    ]

//MultiPolygon has an array of polygon coordinates. 
"geometry": {
    "type": "MultiPolygon",
    "coordinates": [
    [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ],
    [ [ -122.378, 37.826 ], [ -122.377, 37.830 ], [ -122.369, 37.832 ] ]
]

//GeometryCollection has a geometry array. 
//  Each element in the geometry array can be one of the geometry objects above.
{
    "type": "GeometryCollection",
    "geometries": [
        {"type":"Point", "coordinates": [-118.4, 33.9]}
        {"type":"LineString", "coordinates": [[-118.4, 33.9],[-122.4, 37.6]]}
    ]
}