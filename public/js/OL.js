// ----------------------------

// SETS MARKER POSITION TO GIVEN COORDINATES
// parameters: coordinate x, coordinate y, ol map element, feature position into the array

function setMarkerPosition(coordx, coordy, markerLayer, arrPos) {
      markerLayer[arrPos].show([coordx, coordy]);
	   
}

 /* 
 EXAMPLE:
<button onclick="setMarkerPosition(myCoordX, myCoordY, placemark, 0)">
	Reset Marker Position 
</button>

<button onclick="
	    	  setMarkerPosition(myCoordX, myCoordY, placemark, 0);
	    	  doPan(myCoordX,myCoordY, map);
		">
Reset Marker Position and Center View
</button>    	    


*/

// ----------------------------

// CENTERS MAP TO GIVEN COORDINATRS
// parameters: coordinate x, coordinate y, ol map element

function doPan(coordx, coordy, theMap,theZoom) {
              
                var view = new ol.View({
                  // the view's initial state
                  center: theMap.getView().getCenter(),
                  zoom: 6
                });
		
		// when we set the new location, the map will pan smoothly to it
		theMap.getView().setCenter([coordx, coordy]);
		map.getView().setZoom(theZoom);
		
}

 /* 
 EXAMPLE:
<button onclick="doPan(myCoordX, myCoordY, map)">
	Center View with Coordinates
</button>
*/

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
