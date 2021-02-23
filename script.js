function initMap() {
  
  var options = 
  {
    center: {lat: -22.9035107, lng: -43.18508515},
    zoom: 15
  };

  map = new google.maps.Map(document.getElementById("map"), options)

};

function addMarker(property){

  const marker = new google.maps.Marker({
    position: property.location,
    map:map,
    icon: property.imageIcon,
  })
};

addMarker({location:{lat:-22.9035107, lng: -43.18508515}})
