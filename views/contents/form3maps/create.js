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
    
    </script>

 
