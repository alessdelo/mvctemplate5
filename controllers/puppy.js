exports.puppy = function (req, res) {

    res.send('PUPPY - name: ' + req.body.name + ' - age: ' + req.body.age)
    
}
