/* Code by: Adriana Vieira Amancio */

console.log(L);
const button = document.querySelector('#find-me');

const map = L.map('myMap');
map.setView({lon: 0, lat: 0}, 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      L.marker({lon: longitude, lat: latitude}).bindPopup('The center of the world').addTo(map);
      map.setView({lon: longitude, lat: latitude}, 2);
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

    function doZoom() {
        map.setZoom(5);
        }
