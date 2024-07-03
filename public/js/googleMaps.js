// public/js/googleMaps.js

import { Loader } from '@googlemaps/js-api-loader';

const apiOptions = {
  apiKey: 'YOUR_API_KEY',
  version: 'weekly',
};

const loader = new Loader(apiOptions);

loader.load().then(() => {
  console.log('Maps JS API Loaded');
  initMap();
});

function initMap() {
  const mapElement = document.getElementById('map');
  const locations = JSON.parse(mapElement.getAttribute('data-locations'));

  const map = new google.maps.Map(mapElement, {
    center: { lat: locations[0].coordinates[1], lng: locations[0].coordinates[0] },
    zoom: 8,
  });

  locations.forEach(loc => {
    new google.maps.Marker({
      position: { lat: loc.coordinates[1], lng: loc.coordinates[0] },
      map,
      title: loc.description,
    });
  });
}
