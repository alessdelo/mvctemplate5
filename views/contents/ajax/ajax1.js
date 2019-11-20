<!-- <p class="lead">Jquery Basics</p> -->
 <hr class="my-4">
  <ul>
    <li>Jquery hello world</li>
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
</script>

<script>
  // alert("passEjs = " + passEjs);
  // How to extract values ftom getPassEjs
  // alert("getPassEjs = " + getPassEjs);
  // alert(getPassEjs[0]);
  // alert(getPassEjs[0]["puppyTestInfos"]);
</script>

<script>
$(document).ready(function(){
 $("#msgid").html("This is Hello World by JQuery!!!!!");
});
</script>

This is Hello World by HTML:

<br><br>

<div id="msgid">waiting for message ...</div>
