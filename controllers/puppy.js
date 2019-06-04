exports.puppy = function (req, res) {

    res.send('PUPPY - name: ' + req.params.name + ' - age: ' + req.params.age)
    
}
