<!-- <p class="lead">Form 1 Create</p> -->
 <hr class="my-4">
  <ul>
    <li>creates an Openstreetmap record into a MongoDb collection</li>
    <li>uses a Schema with geodata coordinates</li>
  </ul>

  <hr class="my-4">

<script type="text/javascript" src="/static/js/extractors.js"></script>
<script type="text/javascript" src="/static/js/debugs.js"></script>
<script type="text/javascript" src="/static/js/randoms.js"></script>
<script type="text/javascript" src="/static/js/doms.js"></script>

<% strMyVar = JSON.stringify(myVar, null, 4); %>
<!-- <%= strMyVar %> -->
<% var passEjs = strMyVar; %>
<% var passEjsObj = myVar; %>

<script>
var getPassEjs = <%- passEjs %>;
// Area limits (Roma):
// - top-left: 41.9999999, 12.3999999
// - bot-right: 41.7999999, 12.6599999
var coordX = randomIntFromInterval(41.8000000,41.9999999,7);
var coordY = randomIntFromInterval(12.3999999,12.6599999,7);
	
	// random number 1-10	
	// var theRate = Math.floor(Math.random() * 10)+1; 
	
	// external function fro infogenerator.js	
	var theRate = getRandomInt(1, 10);
		
  /*
  $(document).ready( function() {
	$( "input[name='coordx']" ).val(coordX);
	$( "input[name='coordy']" ).val(coordY);
	$( "input[name='rate']" ).val(theRate);
	
		
}); // fine document.ready
*/
</script>


<form action="/olform" method="post" class="my-2 my-lg-0">
	<div class="form-raw">
		<div class="input-group mb-2">
			<div class="input-group-prepend">
				<div class="input-group-text">Name</div>
			</div>
			<input name="name" class="form-control mr-sm-2" placeholder="Point Name" aria-label="Name">
		</div>
     	</div>
     	    
      <div class="form-row">
	  <div class="col">
	  	
	  		
	       			<input type="range" min="1" max="10" value="5" class="slider customRange" id="myRange">
		
	    </div>
	    <div class="col">
		    <div class="input-group mb-2">
				<div class="input-group-prepend">
					<div class="input-group-text">Rate</div>
				</div>
				
		    	 <input name="rate" class="form-control mr-sm-2" aria-label="Rate" placeholder="Rate" value="5" readonly>
		     </div>
	    </div>
	</div>	
        
      	<div class="form-row">	   
	    	 <div class="input-group mb-2">
			<div class="input-group-prepend">
				<div class="input-group-text">X coord</div>
			</div>
	     		<input name="coordx" class="form-control mr-sm-2" aria-label="CoordX" placeholder="CoordX" readonly>
	      	 </div>
	</div>
	<div class="form-row">
	   	<div class="input-group mb-2">
			<div class="input-group-prepend">
				<div class="input-group-text">Y coord</div>
			</div>
	    		<input name="coordy" class="form-control mr-sm-2" aria-label="CoordY" placeholder="CoordY" readonly> 
		</div>	
	</div>
	 	
     
	<div class="form-row">
     		<button id="addItem" class="btn btn-outline-success my-2 my-sm-0" >Add</button>   
     	</div>	
  </form>   
  
  <hr class="my-4">
  
  <div id="map" class="map"></div>
    <form class="form-inline">
      <label>Geometry type &nbsp;</label>
      <select id="type">
        <option value="Point">Point</option>
        <option value="LineString">LineString</option>
        <option value="Polygon">Polygon</option>
        <option value="Circle">Circle</option>
      </select>
    </form>
    <script>
    var slider = document.getElementById("myRange");
    
    slider.oninput = function() {
  	$( "input[name='rate']" ).val(this.value);
	}
    
    
      var raster = new ol.layer.Tile({
        source: new ol.source.OSM()
      });
      var source = new ol.source.Vector();
      var vector = new ol.layer.Vector({
           
        source: source,
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          }),
          stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
          }),
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
              color: '#ffcc33'
            })
          })
        })
      });
      var map = new ol.Map({
      	
        layers: [raster, vector],
        target: 'map',
        view: new ol.View({
		projection: 'EPSG:4326',
          center: [12.45, 41.90],
          zoom: 15
        })
      });
      var modify = new ol.interaction.Modify({source: source});
      map.addInteraction(modify);
      var draw, snap; // global so we can remove them later
     //  var typeSelect = document.getElementById('type');
      function addInteractions() {
        draw = new ol.interaction.Draw({
          source: source,
          type: 'Point'
        });
        map.addInteraction(draw);
        snap = new ol.interaction.Snap({source: source});
        map.addInteraction(snap);
	
	 // var features = vector.getSource().getFeatures();
	 // var coords = feature.getGeometry().getCoordinates());
	 // var coordsStr =  JSON.stringify(coords);
	
	 
	
      }
      /**
       * Handle change event.
       */
       
       /*
      typeSelect.onchange = function() {
        map.removeInteraction(draw);
        map.removeInteraction(snap);
        addInteractions();
      };
      */
      addInteractions();
      
      // Get the array of features
	 // var features = vector.getSource().getFeatures();
	
	 // printObject(features);
	
		
	/* 
	// Go through this array and get coordinates of their geometry.
	features.forEach(function(feature) { 
		 var coords = feature.getGeometry().getCoordinates());
		// alert(coords);
	   // console.log(feature.getGeometry().getCoordinates());
	  // $( "input[name='coordx']" ).val(feature.getGeometry().getCoordinates());
	}); 
	*/ 
	
	
		
	function toWGS84(feature) {
		var coords = feature.getGeometry().getCoordinates();
		 var coordsWGS84 = ol.proj.transform([coords[1], coords[0]], 'EPSG:900913','EPSG:4326');
		 return coordsWGS84;
	} 
	
	
	/*
	function toWGS84(point){
		 return point.transform(
  		new OpenLayers.Projection("EPSG:900913"), // transform from Spherical Mercator Projection
 		 new OpenLayers.Projection("EPSG:4326") // to WGS 1984
		 )
		}
	*/
	
	source.on('addfeature', function(evt){
   		// var feature = evt.feature; 
		 
		// var coordsWGS84 = toWGS84(feature);
		
		var coordsWGS84 = evt.feature.getGeometry().getCoordinates();
		 		 				
		$( "input[name='coordx']" ).val(coordsWGS84[0]);
		$( "input[name='coordy']" ).val(coordsWGS84[1]); 
		
		
		
	});
	
	
	source.on('changefeature', function(evt){
   		// var feature = evt.feature;
   		// var coordsWGS84 = toWGS84(feature);
		 
		 var coordsWGS84 = evt.feature.getGeometry().getCoordinates();
		 
		 $( "input[name='coordx']" ).val(coordsWGS84[0]);
		$( "input[name='coordy']" ).val(coordsWGS84[1]);
	});
	
	
    </script>

  <hr class="my-4">
  <h4>Inspired by...</h4>
  <a href="https://openlayers.org/en/latest/examples/draw-and-modify-features.html" target="_blank">Draw and modify features</a>
  <br>
  <a href="https://openlayers.org/en/latest/examples/snap.html" target="_blank">Draw and modify features (snap)</a>
  <br>
  <a href="https://gis.stackexchange.com/questions/182603/openlayers-get-coordinates-of-drawn-features" target="_blank">Get feature coordinates</a>
  <br>
  <a href=" https://openlayers.org/en/latest/apidoc/ol.source.Vector.Event.html" target="_blank">On feature events</a>
   <br>
  <a href="http://danielstern.ca/range.css/#/" target="_blank">Range Slider Generator</a>
    <br> 
 
