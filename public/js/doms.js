// *************
// CHANGE COLOR
// *************
// changes the target color, giving queryselector (#div, .class, etc...) and color code

   function changeColor(qSelector, theColor){
          let a = document.querySelector(qSelector);
          a.style.color = theColor;
   }
   
// example
// <p class="name" onclick="changeColor('#theTarget0','red')">Change Color</p>
// <p id="theTarget0">Color Target

// --------------------------------------------------------------------------------------
