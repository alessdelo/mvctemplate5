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
