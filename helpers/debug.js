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
            function printObject(o) {
                var out = '';
                for (var p in o) {
                  out += p + ': ' + o[p] + '\n';
                }
                console.log(out);
            }
            
// ------------------------
