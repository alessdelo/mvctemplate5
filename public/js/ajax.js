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


/*

// **********************************************
// **********************************************


// AJAX CALL WITH FUNCTION PARAMETER
// basic ajax function to show json data into a html div on click
*/


function ajaxFunctionParameter(thingToClick, theUrl, theFunction) {
                
      $(thingToClick).click(function() {		    
			
             $.ajax({
		      url: theUrl,
		      type: 'get',
		      dataType:'json',
		      success: function(data) {
                                                theFunction(data); 
                                              },
		      error: function() {
					     alert(error);
                                         }		                    
              }); // end $.ajax
						
       }); // end .click function

} // end ajaxFunctionParameter  

/*
++++++++++++
INSTRUCTIONS
++++++++++++
thingToClick = the HTML element to click (button, div, a...)
url = the url with the ajax data (can be even an express route)
theFunction = a custom function that uses ajax response data as parameter
+++++++
EXAMPLE
+++++++
<button id="theThingToClick">click to test</button>
<div id="theTargetDiv">waiting for ajax text...</div>
			
<script>

// basic (alert)
function myCustomFunction1(data) {
                                  alert('data are: ' + data);
                                }
				
// writes data into a div				
function myCustomFunction2(data) {
                                  $('#theTargetDiv').html(data);
                                }

    // recalls the ajax function
    ajaxFunctionParameter("#theThingToClick", "/test/test.txt", myCustomFunction);
</script>
*/



/*
// **********************************************
// **********************************************


// AJAX CALL WITH FUNCTION PARAMETER (ON DOCUMENT READY)
// basic ajax function to show json data into a html div on click
*/


function ajaxFunctionParameterOnDocument(theUrl, theFunction) {
                
      $( document ).ready(function() {		    
			
             $.ajax({
		      url: theUrl,
		      type: 'get',
		      dataType:'json',
		      success: function(data) {
                                                theFunction(data); 
                                              },
		      error: function() {
					     alert(error);
                                         }		                    
              }); // end $.ajax
						
       }); // end document ready function  

} // end ajaxFunctionParameter  

/*
++++++++++++
INSTRUCTIONS
++++++++++++
url = the url with the ajax data (can be even an express route)
theFunction = a custom function that uses ajax response data as parameter
+++++++
EXAMPLE
+++++++
<button id="theThingToClick">click to test</button>
<div id="theTargetDiv">waiting for ajax text...</div>
			
<script>

// basic (alert)
function myCustomFunction1(data) {
                                  alert('data are: ' + data);
                                }
				
// writes data into a div				
function myCustomFunction2(data) {
                                  $('#theTargetDiv').html(data);
                                }

    // recalls the ajax function
    ajaxFunctionParameterOnDocument("/test/test.txt", myCustomFunction);
</script>
*/


/*
// **********************************************
// **********************************************


// AJAX - DYNAMICALLY CREATES SELECT OPTIONS
// dynamically creates options from a ajax request to a target file containing obj data
// the data of the target file can be gained with a DB query
// every option tag created has an option-text showing the custom field and an option-value with all the record data

*/

function ajaxSelectOptions(theUrl, theMethod, optTextField, selectID) {
                
      $( document ).ready(function() {		    
			
             $.ajax({
		      url: theUrl,
		      type: theMethod,
		      dataType:'json',
		      success: function(data) {
			      			Object.keys(data).forEach(function(key) {    							
							var value = data[key];
    							var o = new Option(value[optTextField], JSON.stringify(value));
							$("#" + selectID).append(o);							
						}); // end Object.keys
                                              },
		      error: function() {
					     alert(error);
                                         }		                    
              }); // end $.ajax
						
       }); // end document ready function  

} // end ajaxFunctionParameter  

/*
++++++++++++
INSTRUCTIONS
++++++++++++)
theUrl = the url with the ajax data (can be even an express route)
optTextField = the record field passed as option text
selectID = the form select html tag ID
*** the option value is the whole record converted in string with JSON.stringify()

+++++++
EXAMPLE
+++++++

<!-- create the select options  -->
<script>
	// function from ajax.js 
	ajaxSelectOptions("/ajax/ajaxCloudinary", "get", "title", "selectImages")
</script>

<!-- form with the select tag  -->
<form class="text-center border border-light p-5" method="post" action="/ajax/ajaxImages">

    <p class="h4 mb-4">Select an image</p>
       
    <select name="selectImages" id="selectImages" class="form-control mb-4">
	  <option disabled selected value="">Select an option..</option>
    </select>

</form>


<!-- what to do with the extracted data  -->

<script>
	$(document).ready(function() { 
	    $('#selectImages').change(function() {		 
		 let text = $("#selectImages option:selected").text();
		 let val = $("#selectImages option:selected").val();
		 val = JSON.parse(val);
		 $('#recId').html(val._id);
		 $('#recTitle').html(val.title);
		 $('#recTime').html(val.created_at);
		 $('#recImg').html(val.image);
		 $('#recImgId').html(val.image_id);
		 $('#recDescr').html(val.description);
		 $('#recTheImage').attr('src', val.image);
		 $('#recImgLink').attr('href', val.image);
	    });
	}); 
    
</script>

<p class="lead">Record details:</p>

<a id="recImgLink" href="#" target="_blank"><img id="recTheImage" class="img-fluid img-thumbnail" src="/static/img/empty.jpg"></a>


<ul class="info">
    <li>
      <p>id: <span id="recId">record ID...</span></p>
    </li>
    <li>
      <p>title: <span id="recTitle">record title...</span></p>
    </li>
    <li>
      <p>time: <span id="recTime">record creation time...</span></p>
    </li>
    <li>
      <p>image: <span id="recImg">record image Cloudinary link...</span></p>
    </li>
    <li>
      <p>image ID: <span id="recImgId">record image Cloudinary ID...</span></p>
    </li>
    <li>
      <p>description: <span id="recDescr">record description...</span></p>
    </li>
</ul>
			
*/

/*
// **********************************************
// **********************************************
// AJAX CALL WITH TRIGGER - METHOD - FUNCTION PARAMETER 
// basic ajax function to show json data into a html div on click
*/



/*
++++++++++++
INSTRUCTIONS
++++++++++++
thingToClick = the HTML element to click (button, div, a...)
url = the url with the ajax data (can be even an express route)
theFunction = a custom function that uses ajax response data as parameter
+++++++
EXAMPLE
+++++++
<button id="theThingToClick">click to test</button>
<div id="theTargetDiv">waiting for ajax text...</div>
			
<script>
// basic (alert)
function myCustomFunction1(data) {
                                  alert('data are: ' + data);
                                }
				
// writes data into a div				
function myCustomFunction2(data) {
                                  $('#theTargetDiv').html(data);
                                }
    // recalls the ajax function
    ajaxFunctionParameter("#theThingToClick", "/test/test.txt", myCustomFunction);
</script>
*/



/*
// **********************************************
// **********************************************
// AJAX FORM - POST METHOD - FUNCTION PARAMETER 
// 
*/


// inspired by:
// https://grokonez.com/node-js/integrate-nodejs-express-jquery-ajax-post-get-bootstrap-view

function ajaxForm0(theUrl, formID, formData, customfunction) {
	$(document).ready(function() {
	  // SUBMIT FORM
	    $("#" + formID).submit(function(event) {
	    // Prevent the form from submitting via the browser.
	    event.preventDefault();
	    ajaxPost();
	  });
	    function ajaxPost(){
	    
		let extractedData = {};
	    	const keys = Object.keys(formData)
		let i = 0
		for (const key of keys) {
                                 switch(formData[key]["type"]) {
							  case "radio":
							    	extractedData[key] = $("#" + formID + " ." + key +":checked").val();
							    break;
							  default:
							    	extractedData[key] = $("#" + formID + " #" + key).val();
							} // end switch

				/*	
                                 switch(formData[key]) {
							  case "radio":
							    	extractedData[key] = $("#" + formID + " ." + key +":checked").val();
							    break;
							  default:
							    	extractedData[key] = $("#" + formID + " #" + key).val();
							} // end switch
                                 */
					} // end for
		
	      // DO POST
	      $.ajax({
	      type : "POST",
	      contentType : "application/json",
	      url : theUrl,
	      data : JSON.stringify(extractedData),
	      dataType : 'json',
	      success : function(data) {
				// alert(JSON.stringify(data));
				customfunction(data);
	      },
	      error : function(e) {
		alert("Error!");
		console.log("ERROR: ", e);
	      }
	    });
	      // Reset FormData after Posting
	      resetData(formData);
	    }
	
	    function resetData(theFormData){
	
	    	const keys = Object.keys(theFormData)
		for (const key of keys) {
					    if(key == "queryField") {
                                                 // keeps the queryField value
                                           } else {
                                                 switch(theFormData[key]["type"]) {
                                                      case "select":
                                                            $('select option[value=\"' + theFormData[key]['default'] + '\"]').attr('selected',true);
                                                      break;

                                                      case "radio":
							    $('input[name=' + key + '][value=\"' + theFormData[key]['default'] + '\"]').prop('checked',true);
                                                            
                                                      break;
                                                      
                                                      case "checkbox":
							    $('input[name=' + key + ']').prop('checked',false);
                                                      break;
                                                      
                                                      default:
                                                            $('#' + formID + ' #' + key).val(theFormData[key]['default']);

                                                 } // end switch
						   
					   } // end if-else
  					
					} // end for
	    } // end resetData
	}) // end ajaxPost()
} // end ajaxForm
