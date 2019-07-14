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
