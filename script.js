function initMap() {
  /** 
  * Função que cria o mapa no site.
  * @summary Função que contém variável de configuração(const options), objeto map na div "Id=map"
    e retorna a função addmarker() que cria um marcador na tela.
  * @param  No Sem parâmetros.
  * @return {function addmarker()} Chama a função que adiciona o marcador.
  */

  const options = 
  {
    center: {lat: -22.9035107, lng: -43.18508515},
    zoom: 15
  };

  map = new google.maps.Map(document.getElementById("map"), options)

  return addmarker()
  
};


function addmarker(){
  /** 
  * Função que cria um ponteiro no mapa.
  * @summary Função que contém variável do ícone do ponteiro de localização(iconimg) e suas configurações;
  objeto marcador(marker) e retorna a função eventsmarker(marker) que contém os eventos do marcador.
  * @param  No Sem parâmetro
  * @return {function eventsmarker(marker)} Chama a função que contém os eventos do marcador.
  */

  const iconimg = {
    url:"https://github.com/gusantos1/TestApiJs/blob/main/views/point.png?raw=true",
    scaledSize: new google.maps.Size(50, 50),
  };
  const marker = new google.maps.Marker({
    position: {lat: -22.9035107, lng: -43.18508515},
    map,
    icon: iconimg,
  });
  return eventsmarker(marker)
};


function eventsmarker(objmarker){
  /** 
  * Função princial dos eventos do usuário com o marcador do mapa.
  * @summary Função que contém eventos de lick
  * @param  {object} objectmarker Recebe um objeto google.maps.Marker como argumento.
  * @return 
  */
  objmarker.addListener("click", () => {
    map.setZoom(18);
    map.setCenter(objmarker.getPosition());
  });
};

