$(document).ready(function() {

  var map;

  function initMap() {
  	 // map = new google.maps.Map(domRef, mapOptions)


     map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.8448, lng: -73.865433},
          zoom: 12
        });

     var marker = new google.maps.Marker ({
	position: {lat: 40.8448, lng: -73.86543},
	map: map,
	title: 'Uptown Baby'
	})
  }
 initMap();

})





