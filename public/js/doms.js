// *************
// CHANGE COLOR
// *************
// changes the target color, giving queryselector (#div, .class, etc...between quotation marks) and color code (between quotation marks)

   function changeColor(qSelector, theColor){
          let x = document.querySelector(qSelector);
          x.style.color = theColor;
   }
   
// example
// <p class="name" onclick="changeColor('#theTarget0','red')">Change Color</p>
// <p id="theTarget0">Color Target</p>

// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving QuerySelector
// *********************************
// changes the target text, giving queryselector (#div, .class, etc... between quotation marks) and text (between quotation marks)

   function changeTextByQsel(qSelector, theText){
          let x = document.querySelector(qSelector);
          x.innerHTML = theText;
   }
   
// example
// <p class="name" onclick="changeText('#theTargetText','I am The new Text!!!')">Change Text</p>
// <p id="theTargetText">Text Target</p>

// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving id name
// *********************************
// changes the target text, giving id name (between quotation marks and without #) and text (between quotation marks)

   function changeTextByDiv(theID, theText){
          let x = document.getElementById(theID);
          x.innerHTML = theText;
   }
   
// EXAMPLE WITH CLICK EVENT
// <p class="name" onclick="changeText('myDiv','I am The new Text!!!')">Change Text</p>
// <p id="myDiv">Text Target</p>

// EXAMPLE WITH DOCUMENT EVENT
/*
<script>
alert("event")
  document.addEventListener("DOMContentLoaded", function(event) { 
    changeTextByDiv('divDocument','I am The new DivDocument Text!!!')
  });
alert("event end")
</script>

<p id="divDocument">Text Target Div Document</p>
*/

// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving Field Name
// *********************************
// changes the input default value, giving the field name (between quotation marks) and text 

   function changeInputText(fieldName, theText){
          let x = document.querySelector('input[name=' + fieldName + ']');
          x.value = theText;
   }
   
// EXAMPLE
/*
<script>
  document.addEventListener("DOMContentLoaded", function(event) { 
    changeInputText('name','GuidoBaldo');
    changeInputText('age',44);
  });
</script>

  <form action="/form/create/" method="POST">
    <input type="text" placeholder="name" name="name" value="">
    <input type="text" placeholder="age" name="age" value="">
    <button type="submit">Submit</button>
  </form>
*/
// --------------------------------------------------------------------------------------

// *********************************
// CHANGE TEXT giving Field Name
// *********************************
// changes the input default value, giving the field name (between quotation marks) and text 

   function changeInputDefaultVal(fieldName, theText){
          let x = document.querySelector('input[name=' + fieldName + ']');
          x.defaultValue = theText;
   }
   
// EXAMPLE
/*
<script>
  document.addEventListener("DOMContentLoaded", function(event) { 
    changeInputText('name','GuidoBaldo');
    changeInputText('age',44);
  });
</script>

  <form action="/form/create/" method="POST">
    <input type="text" placeholder="name" name="name" value="">
    <input type="text" placeholder="age" name="age" value="">
    <button type="submit">Submit</button>
  </form>
*/
// --------------------------------------------------------------------------------------

// INPUT FIELD - SET/UNSET READONLY


  function setInputReadonly(fieldName, trueOrFalse) {    
          let x = document.querySelector('input[name=' + fieldName + ']');
          x.readOnly = trueOrFalse;    
  } 

// example
// setInputReadonly('inputname', true)



// INPUT FIELD - SET/UNSET READONLY (TOGGLE)


  function toggleInputReadonly(fieldName) {    
          let x = document.querySelector('input[name=' + fieldName + ']');

          if (x.readOnly === true) {
              x.readOnly = false;
          } else {
              x.readOnly = true;
          }
              
  } 

// example
// setInputReadonly('inputname')

// --------------------------------------------------------------------------------------

// *********************************
// DISPLAY JUST UPLOADED IMAGE on form input upload
// *********************************

// "input" is the fpom input upload field ID; "img" is the target image ID

function displayUploadedImage(input, img) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(event) {
         $('#' + img).attr('src', event.target.result);
      }
      reader.readAsDataURL(input.files[0]);
   }
}

/*
// HTML
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<form id = "form1" runat = "server">
   <input type ='file' id = "upl" />
   <img id = "uplImg" src = "#" alt = "new image" />
</form>

// javascript / JQuery
$("#upl").change(function() {
   displayUploadedImage(this, "uplImg");
});
*/

// --------------------------------------------------------------------------------------

// *********************************
// FORM PASSWORD FIELD - TOGGLE VISIBLE / NOT VISIBLE
// *********************************

// "pwdFieldId" is the ID of the password field


function showPassword(pwdFieldId) {
  var x = document.getElementById(pwdFieldId);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


/*
 <!-- Password -->
	    <div class="form-row">
	    	<div class="col">
		    <div class="md-form">
			<input type="password" name="password" id="password" class="form-control" aria-describedby="thePassword">
			<label for="password">Password</label>
			<small id="thePassword" class="form-text text-muted mb-4">
			    At least 8 characters and 1 digit
			</small>
		    </div>
		    <div class="form-check">
		    	<!-- An element to toggle between password visibility -->
    			<input type="checkbox" class="form-check-input" id="showThePassword" onclick="showPassword('password')">
    			<label class="form-check-label" for="showThePassword">Show Password</label>
  		    </div>
		 <div class="col">  
  */
	    </div>
