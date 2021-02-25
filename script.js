function initMap() {
  /**
 * [Criação do map no site ...]
 */
  const options = 
  {
    center: {lat: -22.9035107, lng: -43.18508515},
    zoom: 15
  };

  map = new google.maps.Map(document.getElementById("map"), options)
  
  const iconimg = {
    url:"https://github.com/gusantos1/TestApiJs/blob/main/views/point.png?raw=true",
    scaledSize: new google.maps.Size(50, 50),
  };
  const marker = new google.maps.Marker({
    position: {lat: -22.9035107, lng: -43.18508515},
    map,
    icon: iconimg,
  });
};

