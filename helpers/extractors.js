function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

// returns [ 1, 3, 5 ]
// var result = getFields(objArray, "foo");
