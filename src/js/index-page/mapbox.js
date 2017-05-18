var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFjcXVpbWFoZXIiLCJhIjoiY2oyc3p2OHMwMDAycDMwbWZrdnMwb2hoaiJ9.RQc8Lb9rYII1NrfGfVgYlA';
var map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v9'
});


