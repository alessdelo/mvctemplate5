// CENTERS MAP TO GIVEN COORDINATRS
// parameters: coordinate x, coordinate y, ol map element

function doPan(coordx, coordy, theMap) {
              
                var view = new ol.View({
                  // the view's initial state
                  center: theMap.getView().getCenter(),
                  zoom: 6
                });
		
		// when we set the new location, the map will pan smoothly to it
		theMap.getView().setCenter([coordx, coordy]);
		
}

// ----------------------------


function fromMercatorToWGS84(feature) {
		var coords = feature.getGeometry().getCoordinates();
		 var coordsWGS84 = ol.proj.transform([coords[1], coords[0]], 'EPSG:900913','EPSG:4326');
		 return coordsWGS84;
	} 
  
  
  function fromWGS84ToMercator(feature) {
		var coords = feature.getGeometry().getCoordinates();
		 var coordsWGS84 = ol.proj.transform([coords[1], coords[0]],'EPSG:4326','EPSG:900913');
		 return coordsWGS84;
	} 
