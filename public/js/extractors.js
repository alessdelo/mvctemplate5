
/*
EXTRACT VALUE FROM OBJECT KNOWING KEY NAME
I have JavaScript object array with the following structure:

objArray = [ 
             { foo: 1, bar: 2},
             { foo: 3, bar: 4},
             { foo: 5, bar: 6}
           ];

I want to extract a field from each object,
and get an array containing the values, 
for example field foo
would give array [ 1, 3, 5 ].
*/

exports.getFieldsFromObj = function (input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

// returns [ 1, 3, 5 ]
// var result = getFields(objArray, "foo");

// -------------------------------------

/*
            for(var theKey in dataArray) {
                if(dataArray.hasOwnProperty(theKey)) {
                    var theVal = dataArray[theKey];
                        alert(theKey + " - " + theVal);
                       // $('#objVals').html(theVal);
                       //  $( "#objVals" ).html( "<p>" + theKey + " - " + theVal + "</p>" );
                       $("ol").append("<li>" + theKey + " - " + theVal + "</li>" );
                       // $("ol").append("<li>foo</li>" );
                }
            } // fine for
*/
