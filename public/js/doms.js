// *************
// CHANGE COLOR
// *************
// changes the target color, giving queryselector (#div, .class, etc...) and color code

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
// changes the target text, giving queryselector (#div, .class, etc...) and text

   function changeText(qSelector, theText){
          let x = document.querySelector(qSelector);
          x.innerHTML = theText;
   }
   
// example
// <p class="name" onclick="changeText('#theTargetText','I am The new Text!!!')">Change Text</p>
// <p id="theTargetText">Text Target</p>

// --------------------------------------------------------------------------------------
