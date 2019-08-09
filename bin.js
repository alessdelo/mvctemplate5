
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
