"use strict";

/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

//We have completed the above to do! keys.js made > put it into our .gitignore, following that we demonstrated the quickstart option from MapBox to make sure we were all connected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]

mapboxgl.accessToken = mapboxToken;

var mapOptions = {
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4861, 29.4252],
    zoom: 8
}

// var map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-98.4861, 29.4252], // starting position [lng, lat]
//     zoom: 14// starting zoom
// });

// Let's try it with a variable of options - inside the var, we have an object with similar properties as we saw above

// var marcoMap = new mapboxgl.Map(mapOptions)

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)

// var map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/dark-v10', // style URL
//     center: [-96.80, 32.77], // starting position [lng, lat]
//     zoom: 24// starting zoom
// });


/**********************************************
 * 					MARKERS
 *********************************************/
var marcoMap = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-98.4861, 29.426],
    zoom: 10
})

// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.

// var marker = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(marcoMap)

// TODO TOGETHER: Change the color of the marker

//See a pattern of sorts: new mapboxgl.NameOfMethod({object: "option value"})
var marcoMarker = new mapboxgl.Marker({color: "orange"})
    .setLngLat([-98.4861, 29.4260])
    .addTo(marcoMap)

// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"


// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!





// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!
// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter

//TODO: Using the geocode method above, add a marker at Codeup to the map


//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


