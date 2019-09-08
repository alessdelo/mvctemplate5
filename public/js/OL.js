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
