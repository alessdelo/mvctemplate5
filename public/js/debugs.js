// **********
// DEBUG
// **********

// OBJECTS

// alerts Object contents
         function printObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                alert(out);
         }
            
// ------------------------

// writes object contents on console log
          function logObject = function (o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                console.log(out);
            }
            
// ------------------------

// returns a variable with the object
          function textFromObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                return out;
            }
            
// ------------------------
