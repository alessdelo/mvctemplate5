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
   
// example
// <p class="name" onclick="changeText('myDiv','I am The new Text!!!')">Change Text</p>
// <p id="myDiv">Text Target</p>

// --------------------------------------------------------------------------------------
