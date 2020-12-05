<script>
/*
function(theImg) {
	theImg.onload = function(){
	  var height = img.height;
	  var width = img.width;

  	// code here to use the dimensions
	alert("width = " width + " - height = " + height);
	}
}
*/
</script>

<script>
function imgSize(imgID) {

		var myImg = document.querySelector(imgID);
		var realWidth = myImg.naturalWidth;
		var realHeight = myImg.naturalHeight;
		alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);

}
	/*
	$(document).ready(function(){
		
	});
	*/

</script>






/*
window.onload=getExif;


 
function getExif() {
    
    alert("exif test!");
 

    var img1 = document.getElementById("img1");
    EXIF.getData(img1, function() {
    	alert(img1);
        var allMetaData = EXIF.getAllTags(this);
	alert(allMetaData);
        // var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        // allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
    });
    



       var img2 = document.getElementById("img2");
    EXIF.getData(img2, function() {

        var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
        // var makeAndModel = document.getElementById("makeAndModel");
        // makeAndModel.innerHTML = `${make} ${model}`;
	alert(`${make} ${model}`);
    });
    
}

 */  

-----------------------------------------------------------------

<script>

printObject("bla");

var ExifImage = require('exif').ExifImage;

printObject(ExifImage);

var myImg = "https://res.cloudinary.com/alessdelo/image/upload/v1588515010/alessdelo/360/ofizyxsijdjoqm8cgj1l.jpg";
 
try {
    new ExifImage({ image : myImg }, function (error, exifData) {
        if (error)
	    alert('Error: '+error.message);
            // console.log('Error: '+error.message);
        else
	    alert(exifData); // Do something with your data!
            console.log(exifData); // Do something with your data!
    });
} catch (error) {
    console.log('Error: ' + error.message);
}

</script>



------------------------------------------------

<script>
$(document).ready(function(){
    $("form#changeQuote").on('submit', function(e){
        e.preventDefault();
        var data = $('input[name=quote]').val();
        $.ajax({
            type: 'post',
            url: '/ajax/ajax1Post',
            data: data,
            dataType: 'text'
        })
        .done(function(data){
            $('#targetDiv').html(data);
        });
    });
});
</script>

<h1>Form Post</h1>
<form method="post" id="changeQuote">
    <input type="text" placeholder="Set quote of the day" name="quote"/>
    <input type="submit" value="Save">
</form>

<br>
<div id="targetDiv2">waiting for message ...</div>



<br><br>
<p>------------------------------------------------------------------</p>

		<script>
		
		// url: '/ajax/ajax1Test',
            
                // AJAX TEST 1 (retrieve a simple text)
                
                // takes simple text from php	
                
                function ajaxTest1(target) {
                
                    $(target).click(function() {
		    
		        // console.log("OOOKKK!!!");
		    	// alert("OOOKKK!!!");
		    
		    
                    
                        $.ajax({
                                        url: 'ajax/ajax1Test3',
                                        type: 'get',
                                        dataType:'text',
                                        success: function(data){
					    console.log(data);
                                            window.alert(data);
                                        },
                                        
                                        error: function(text){
					    console.log(text);
                                            alert(text);
                                            
                                        }
                               });  
			       
			 			
			
                    /*
                        $.ajax({
                                        url: '/ajax1Test3',
                                        type: 'get',
                                        dataType:'text',
                                        success: function(data){
					    console.log(data);
                                            window.alert(data);
                                        },
                                        
                                        error: function(text){
					    console.log(text);
                                            alert(text);
                                            
                                        }
                               });  
			       
			   */
			   
			       /*
			       $("button").on("click", function () {
					$.ajax({
					type: 'GET',
					url: '/',
					success: function(result) {
					     console.log(text);
					     $('#targetDiv').html(result);
					}
				      });
				})
			       */
			       
			
                    }); // end $target function
                } // end ajaxTest1  
                
                // richiama la funbzione ajax
                // ajaxTest124("#target","aaabbb");
           </script>

           <h4>Test invio ricezione verso file di destinazione</h4>
			<button id="theTarget">clicca per testare</button>

            <script>
              // richiama la funzione ajax
                ajaxTest1("#theTarget");
           </script>

<br>
<button>Press</button>
<br>
<div id="targetDiv">waiting for message ...</div>
<br><br>



<p>------------------------------------------------------------------</p>
	   
<a href="https://mherman.org/blog/handling-ajax-calls-with-node-dot-js-and-express-scraping-craigslist/" target="_blank">mherman.org</a>

<script>
$(document).ready(function(){
$(function(){
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
       $.get( '/ajax/ajax1Test2',parameters, function(data) {
       $('#results').html(data);
     });
    };
 });
});
}); // end document.ready
</script>

<div id="result">the result</div>

<p> ----------------------- </p>

<script>
$(document).ready(function(){
$.ajax({
    url : '/ajax/ajax1Test',
    type : 'GET',
    data : {
        'numberOfWords' : 10
    },
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
});
}); // end document.ready
</script>


// ------------------------------------------------------------------------------------------

<ul class="info">
    <li>
      <p>id: <span id="theId"><%= theObject["_id"] %></span></p>
    </li>
    <li>
      <p>username: <span id="theUsr"><%= theObject["username"] %></span></p>
    </li>
    <li>
      <p>time: <span id="theTime"><%= theObject["createdDate"] %></span></p>
    </li>
    <li>
      <p>First Name: <span id="theFName"><%= theObject["firstName"] %></span></p>
    </li>
    <li>
      <p>Last Name: <span id="theLName"><%= theObject["lastName"] %></span></p>
    </li>
</ul>

// -----------------------------

async function createUsr(userParam) {
    // validate
    if (await theModel.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new theModel(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}



// ------------+-+----------------------


<p class="lead">Just Inserted Data:</p>
<ul class="info">
    <li>
      <p>id: <span id="theId"><%= theObject["id"] %></span></p>
    </li>
    <li>
      <p>title: <span id="theTitle"><%= theObject["title"] %></span></p>
    </li>
    <li>
      <p>time: <span id="theTime"><%= theObject["created_at"] %></span></p>
    </li>
    <li>
      <p>image: <span id="theImg"><%= theObject["image"] %></span></p>
    </li>
    <li>
      <p>image ID: x: <span id="theImgId"><%= theObject["image_id"] %></span></p>
    </li>
</ul>

 
// ----------------------------

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
 
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About


// -----------------------------------------------------------------------

// https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js

exports.recordlistpag = function (req, res) {

    var limit = parseInt(req.params.limit)
    var page = parseInt(req.params.page)

    theModel.find()
        .select('name')
        .limit(limit)
        .skip(limit * page)
        .sort({
            name: 'asc'
        })
        .exec(function(err, events) {
            theModel.count().exec(function(err, count) {
                res.send({
                    events: events,
                    page: page,
                    pages: count / limit
                })
            })
        })

} // end recordlistpag

// -----------------------------------------------------------------------------

exports.recordlistpag = function (req, res) {

    var query = theModel.find().skip(5).limit(3);
    query.exec().then(function (docs) {
      // docs is an array of 3 docs
        res.send(docs)
    })

} // end recordlistpag



_------------------------------------------

		            	<li class="page-item"><a class="page-link" href="<%= paginLink + (currentPage - 1) + "/" + limit + "/" + pagesnum; %>">Previous</a></li>
			      	<li class="page-item"><a class="page-link" href="<%= paginLink + (currentPage - 1) + "/" + limit + "/" + pagesnum; %>"><%= currentPage - 1; %></a></li>
		      		<li class="page-item"><a class="page-link" class="font-weight-bold" href="<%= paginLink + currentPage + "/" + limit + "/" + pagesnum; %>"><%= currentPage; %></a></li>
		      		<li class="page-item"><a class="page-link" href="<%= paginLink + (currentPage + 1) + "/" + limit + "/" + pagesnum; %>"><%= currentPage + 1; %></a></li>
			        <li class="page-item"><a class="page-link" href="<%= paginLink + (currentPage + 1) + "/" + limit + "/" + pagesnum; %>">Next</a></li>

_------------------------------------------

// ROUTES

onst express = require('express');
const router = express.Router();


/*
// Require the controllers WHICH WE DID NOT CREATE YET!!
const the_controller = "../controllers/form2";
// create record (get request)
const the_createg = require(the_controller + "createg" + ".js");
router.get('/createg', the_createg.createg);
*/


/*
// Require the controllers WHICH WE DID NOT CREATE YET!!
// const the_controller = "../controllers/form2";
const the_controller = "controllers/form2";
const contr = [];
// create record (get request)
var contrName = "createg";
contr[contrName] = require(the_controller + "/" + contrName + ".js");
router.get('/' + contrName, contr[contrName][contrName]);
*/



// Require the controllers WHICH WE DID NOT CREATE YET!!
const the_controller = "../controllers/form2/";



const contr = [
                {"name": "createg", "req": "get", "params": "" },
                {"name": "createp", "req": "post", "params": "" },
                {"name": "readg", "req": "get", "params": "/:id" },
                {"name": "edit", "req": "get", "params": "/:id" },
                {"name": "updatep", "req": "post", "params": "" },
                {"name": "search", "req": "post", "params": "" },
                {"name": "recordlist", "req": "get", "params": "/:num" }
              ];

var i;

for (i = 0; i < contr.length; i++) { 
   
    let contrName = contr[i]["name"];
    let contrReq = contr[i]["req"];
    let contrParams = contr[i]["params"];

    // example: const the_controller = require("../controllers/form2/edit.js");
    contr[contrName] = require(the_controller + contrName + ".js");

    if(contrReq == "post") {
      
           // example = edit:  router.post('/edit', the_controller);
           router.post('/' + contrName, contr[contrName][contrName]);

    } else {
      
          // example = edit:  router.get('/edit/:id', the_controller);
          router.get('/' + contrName + contrParams, contr[contrName][contrName]);

    }

}




// create record (get request)







/*
// create
    // with data
    router.post('/createp', the_controller.createp);
    // router.post('/createp', the_controller.form1createp);
    // with no data
    router.get('/create', the_controller.create);
  
// read
router.get('/read/:id', the_controller.read);
// UPDATE
// edit
router.get('/edit/:id', the_controller.edit);
// update
router.get('/update/:id/:name/:age', the_controller.update);
// update post
router.post('/updatep', the_controller.updatep);
// update get from form
router.get('/updatep', the_controller.updatep);
// delete
router.get('/delete/:id', the_controller.delete);
router.get('/deletep/:id', the_controller.deletep);
// extracts last n. items
router.get('/lastitems/:num', the_controller.lastitems);
*/


module.exports = router;
_------------------------------------------

<!-- <input type="hidden" name="id" value=""> -->

<%= passEjs[0]["result"]["_id"] %>

_------------------------------------------

// Extract last n.
exports.lastitems = function (req, res) {

    theModel.find({}, { useFindAndModify: false }, function (err, result) {
    
         if (err) res.send(debugs.textFromObject(err)) // return next(err)
   
                res.send("the num: " + req.params.num + "<br> result: " + debugs.textFromObject(result))

            } ).sort({$natural:1}).limit(parseInt(req.params.num))
    
 } // end lastitems


 _------------------------------------------

<% strMyVar = JSON.stringify(myVar, null, 4); %>
<%= strMyVar %>
<% var passEjs = strMyVar; %>
<% var passEjsObj = myVar; %>

<script>
	var randName = randWord(5);
	var randAge = randNum(99);
	// alert("name: " + randName + " - age: " +  randAge);
	document.addEventListener("DOMContentLoaded", function(event) { 
		changeInputText('name', randName);
		changeInputText('age', randAge);
	});
</script>



<script>
  $(document).ready(function(){
  	alert("jquery test!!");
   //  $("#msgid").html("This is Hello World by JQuery");
  });
</script>

<div id="msgid">msgid</div>

<script>
$( document ).ready(function() {
    alert("jquery ok!");
    $("#theTest").html("io sono il test");
});
</script>

<script>
 // alert("document ready");
  // var randName = randWord(5);
 // var randAge = randNum(99);
  // alert("name: " + randName " - age: " + randAge);
 // $("#inpName").attr("value", "Gino");
  
// document.getElementById('theTest').innerHTML += "io sono il test";
// $( document ).ready(function() {
   // alert("document ready");
    // $("#inpName").val("Gino");
   //  $("#theTest").html("io sono il test");
   // $( "input[name='name']" ).val("Ugo");
		
// });
</script>

<script>
var getPassEjs = <%- passEjs %>;
</script>

<script>
  // alert("passEjs = " + passEjs);
  // How to extract values ftom getPassEjs
 alert(getPassEjs);
 alert(getPassEjs[0]);
 alert(getPassEjs[0]["name"]);
</script>



<%
  var ejsName = "Franco"; 
  var ejsAge = "22"; 
%>
<p>passEjs: <%= passEjs; %></p>

<br><br>

<p id="test1">theTest</p>

<br>

<ul class="info">
    <li>
      <span id="theId"><%= passEjsObj[0]["id"] %></span>
    </li>
    <li>
      <span id="theName"></span>
    </li>
    <li>
      <span id="theAge"><%= passEjsObj[0]["age"] %></span>
    </li>
  </ul>


  <form action="/form1/createp/" method="POST">
    <input type="text" placeholder="name" name="name" value="">
    <input type="text" placeholder="age" name="age" value="<%= ejsAge %>">
    <button type="submit">Submit</button>
  </form>


 _------------------------------------------

<form action="/form1/createp" method="POST">

_------------------------------------------

 var randName = randWord(5);
  var randAge = randNum(99);
  alert("name: " + randName " - age: " + randAge);
  <%= randName %>
  <%= randAge %>
  <% var ejsName = randName; %>
  <% var ejsAge = randAge; %>

 _------------------------------------------
  

<p class="lead">The Home 2</p>
  <hr class="my-4">
  <p>This is an amazing page!!!</p>
  <script> alert('home2'); </script>
  <hr class="my-4">

<script type="text/javascript" src="/static/js/extractors.js"></script>
<script type="text/javascript" src="/static/js/debugs.js"></script>

<% strMyVar = JSON.stringify(myVar, null, 4); %>
<%= strMyVar %>
<% var passEjs = strMyVar; %>
<% var passEjsObj = myVar; %>

<script>
var getPassEjs = <%- passEjs %>;
</script>

<script>
  // How to extract values ftom getPassEjs
  alert("getPassEjs = " + getPassEjs);
  alert(getPassEjs[0]);
  alert(getPassEjs[0]["puppyTestInfos"]);


 _------------------------------------------
  
  Kitty.
        find({"name" : /.*a.*/i} ).
        limit(5).
        exec(function (err, result) {
              if (err) return next(err)
              res.send( debugs.textFromObject(result) )
           })
           
  _------------------------------------------
