// AJAX ALERT
// alerts a text

function ajaxAlert(thingToClick, url) {
                
      $(thingToClick).click(function() {		    
			
             $.ajax({
		      url: '/static/test/test.txt',
		      type: 'get',
		      dataType:'text',
		      success: function(data) { alert('ok'); },
		      error: function() {
					     alert(error);
		                        }
             }); // end $.ajax
						
       }); // end .click function

} // end ajaxAlert  

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
    ajaxTest1("#theTarget", "/test/test.txt");
</script>


*/
