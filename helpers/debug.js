// **********
// DEBUG
// **********

// OBJECTS

 // printObject() -  converts an Object into a text and alerts
            function printObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                alert(out);
            }
            
// ------------------------

// logObject() -  converts an Object into a text and writes it to the console
            function logObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                console.log(out);
            }
            
// ------------------------

// textFromObject() -  returns a text from an Object
            function textFromObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                return out;
            }
            
// ------------------------
