<hr class="my-4">
  <ul>
    <li>shows a table with last n. records inserted</li>
    <li>shows the option of modifiy and delete the record</li>
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
<% var records = passEjsObj[0]["result"]; %>
<script>
var getPassEjs = <%- passEjs %>;
</script>

<script>
	// How to extract values ftom getPassEjs
	// alert(getPassEjs);
	// alert(getPassEjs[0]);
	// alert(getPassEjs[0]["result"]);
	// var records = getPassEjs[0]["result"];
</script>

<!-- <p>passEjs: <%= passEjs; %></p> <br><br> -->

<form action="/form2/createg">
    <button type="submit">Create a New Record!</button>
</form>

<p>or</p>

<form action="/form2/search/" method="POST">
    <fieldset>
	<legend>Search for a specific record</legend>
       
	<ol>
            <li>
	        <label for="id">ID</label>
		<input type="text" placeholder="id" name="id" value="">
	    </li>
	    <li>
	        <label for="name">Name</label>
		<input type="text" placeholder="name" name="name" value="">
	    </li>
	    <li>
	        <label for="age">Age</label>
	        <input type="text" placeholder="age" name="age" value="">
	    </li>
        </ol>
    </fieldset>
    <fieldset>
        <button type="submit">Submit</button>
    </fieldset>	
</form>




<div class="table-responsive">
	<table class="table">
	  <thead>
	    <tr>
	      <th scope="col">#</th>
	      <th scope="col">id</th>
	      <th scope="col">name</th>
	      <th scope="col">age</th>
	      <th scope="col">show</th>
	      <th scope="col">modify</th>
	      <th scope="col">delete</th>
	    </tr>
	  </thead>
	  <tbody>
	    <%
		for(var i=0; i < records.length; i++) {
		     let scope = i+1;
	    %>
	       <tr>
		   <th scope="row"><%= scope %></th>
		   <td><%= records[i].id %></td>
		   <td><%= records[i].name %></td>
		   <td><%= records[i].age %></td>
		   <td><a href="/form2/readg/<%= records[i].id %>">show</a></td>
		   <td><a href="/form2/edit/<%= records[i].id %>">modify</a></td>
		   <td><a href="/form2/deletep/<%= records[i].id %>">delete</a></td>
	       </tr>
	    <% } %>
	  </tbody>
	     <tfoot>
		<tr>
		  <nav aria-label="Page navigation example">
		    <ul class="pagination">
		      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
		      <li class="page-item"><a class="page-link" href="#">1</a></li>
		      <li class="page-item"><a class="page-link" href="#">2</a></li>
		      <li class="page-item"><a class="page-link" href="#">3</a></li>
		      <li class="page-item"><a class="page-link" href="#">Next</a></li>
		    </ul>
		  </nav>
		</tr>
	      </tfoot>
	</table>
</div>

<hr class="my-4">

<p class="lead">Other options...</p>
<a href="/">back to the home page</a>
<br><br>
<a href="/form2/createg">insert another record</a>
<br><br>
<a href="/form2/recordlistpag/1/10">show records table</a>
