// **********
// DEBUG
// **********

// OBJECTS

 // printObject() -  converts an Object into a text and alerts

// for express
          exports.printObject = function (o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                alert(out);
            }

// --------------

// for html
         function printObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                alert(out);
         }
            
// ------------------------

// logObject() -  converts an Object into a text and writes it to the console
           exports.logObject = function (o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                console.log(out);
            }
            
// ------------------------

// textFromObject() -  returns a text from an Object
            exports.textFromObject = function (o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                return out;
            }
            
// ------------------------
