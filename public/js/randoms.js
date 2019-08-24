//random string
function randTxt(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// console.log(randTxt(5));


// ----------------------------------------

// random num (stringfied) 
function randNum(limit) {
        let num = Math.floor(Math.random() * limit)
        
        num = num.toString()
  
        return num       
}

// console.log( randNum(99) );

// ----------------------------------------

// generates a word with alternated vowels and consonants
function randWord(length) {
    var consonants = 'bcdfghjklmnpqrstvwxyz',
        vowels = 'aeiou',
        rand = function(limit) {
            return Math.floor(Math.random()*limit);
        },
        i, word='', length = parseInt(length,10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i=0;i<length/2;i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
        word += i*2<length-1 ? randVowel : '';
    }
    return word;
}
 
// console.log( randWord(10) );

// ----------------------------------------
function randItemFromArray(itemsArr) {
var item = itemsArr[Math.floor(Math.random()*itemsArr.length)];

return item
}

// myArray = [a,b,c,d,e,f]
// randItemFromArray(myArray)

// -----------------------------------------------

// GENERATES RANDOM COORDINATES FROM EXTREME POINTS

// GENERATES A RANDOM INTERVAL NUMBER WITH DECIMALS
function randomIntFromInterval(min,max,decimals)
{
  return Number((Math.random()*(max-min)+min).toFixed(decimals));
}

/*
// example:
// Area limits (Roma):
// - top-left: 41.9999999, 12.3999999
// - bot-right: 41.7999999, 12.6599999
var coordX = randomIntFromInterval(41.8000000,41.9999999,7);
var coordY = randomIntFromInterval(12.3999999,12.6599999,7);
*/

// -----------------------------------------------

// RANDOM PHRASE

// chooses one random word from an array of words
function randElementFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// -------------

// returns a random phrase giving n array of words and the length of the phrase
function randomPhraseFromArray(arr, length) {
   
   // let phrase = randElementFromArray(arr) + " - " + length;
   
   
      let phrase = "";
      
      for(var x=0; x<length; x++) {
         //  if (x == 0) { 
             // phrase = randElementFromArray(arr);
         //  } else {
               phrase += randElementFromArray(arr) + " ";
         //  } 
      }

   return phrase;
}

/*
example: 

var wordsArray = ['Horse', 'Pig', 'Dog', 'Cat', 'Parrot', 'Iguana'];

var randPhrase = randomPhraseFromArray(wordsArray, 20);

*/

// ----------------------


function arrayFromText(text) {
      let arr = arr.join(' ').split(' ');
      return arr;
}
