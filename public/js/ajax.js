// AJAX ALERT
// very basic ajax function to alert a text

function ajaxAlertTxt(thingToClick, theUrl) {
                
      $(thingToClick).click(function() {		    
			
             $.ajax({
		      url: theUrl,
		      type: 'get',
		      dataType:'text',
		      success: function(data) { alert(data); },
		      error: function() {
					     alert(error);
		                        }
             }); // end $.ajax
						
       }); // end .click function

} // end ajaxAlertTxt  

/*
++++++++++++
INSTRUCTIONS
++++++++++++

thingToClick = the HTML element to click (button, div, a...)

url = the url with the ajax data (can be even an express route)

+++++++
EXAMPLE
+++++++

<button id="theTarget">click to test</button>

			
<script>
    // recalls the ajax function
    ajaxAlertTxt("#theTarget", "/test/test.txt");
</script>


*/

// **********************************************
// **********************************************


// AJAX TO DIV
// basic ajax function to show text data into a html div on click

function ajaxTxtToDiv(thingToClick, theUrl, theTarget) {
                
      $(thingToClick).click(function() {		    
			
             $.ajax({
		      url: theUrl,
		      type: 'get',
		      dataType:'text',
		      success: function(data) {
                                                $(theTarget).html(data); 
                                              },
		      error: function() {
					     alert(error);
                                         }		                    
              }); // end $.ajax
						
       }); // end .click function

} // end ajaxTxtToDiv  

/*
++++++++++++
INSTRUCTIONS
++++++++++++

thingToClick = the HTML element to click (button, div, a...)

url = the url with the ajax data (can be even an express route)

theTarget = html div that will show the data

+++++++
EXAMPLE
+++++++

<button id="theThingToClick">click to test</button>

<div id="theTargetDiv">waiting for ajax text...</div>
			
<script>
    // recalls the ajax function
    ajaxTxtToDiv("#theThingToClick", "/test/test.txt", "#theTargetDiv");
</script>


*/

// **********************************************
// **********************************************


// AJAX JSON TO DIV
// basic ajax function to show json data into a html div on click

function ajaxJsonToDiv(thingToClick, theUrl, theTarget) {
                
      $(thingToClick).click(function() {		    
			
             $.ajax({
		      url: theUrl,
		      type: 'get',
		      dataType:'json',
		      success: function(data) {
                                                $(theTarget).html(data); 
                                              },
		      error: function() {
					     alert(error);
                                         }		                    
              }); // end $.ajax
						
       }); // end .click function

} // end ajaxJsonToDiv  

/*
++++++++++++
INSTRUCTIONS
++++++++++++

thingToClick = the HTML element to click (button, div, a...)

url = the url with the ajax data (can be even an express route)

theTarget = html div that will show the data

+++++++
EXAMPLE
+++++++

<button id="theThingToClick">click to test</button>

<div id="theTargetDiv">waiting for ajax text...</div>
			
<script>
    // recalls the ajax function
    ajaxJsonToDiv("#theThingToClick", "/test/test.txt", "#theTargetDiv");
</script>


*/

