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

<!-- alerts a text from a file -->

<button id="theTarget">click to test</button>

			
<script>
    // recalls the ajax function
    ajaxAlertTxt("#theTarget", "/test/test.txt");
</script>


*/
