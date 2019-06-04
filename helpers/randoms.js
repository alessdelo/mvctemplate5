//random string 
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// console.log(makeid(5));


// ----------------------------------------

function randAge() {
        let age = Math.floor(Math.random() * 99)
        
        age = age.toString()
  
        return age       
}

// ----------------------------------------

//random string 
function randName(length) {
   var result           = '';
   var consonants       = 'bcdfghjklmnpqrstuvwxyz';
   var vocals       = 'aeiou';
   
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      if (i == 0 || i/2 == 0 ||) 
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// console.log(randName(5));
