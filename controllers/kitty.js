const Kitty = require('../models/kitty')


exports.kitty_create = function (req, res) {


    let kitty = new Kitty(
        {
            name: req.params.name,
            age: req.params.age
            
        }
    )

    kitty.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Kitty Created successfully! Record: ' + req.params.name + ' - ' + req.params.age)
    })

}

// READ
exports.kitty_details = function (req, res) {
    Kitty.findById(req.params.id, function (err, kitten) {
        if (err) return next(err)
        res.send(kitten)
    })
}


// UPDATE
exports.kitty_update = function (req, res) {
    Kitty.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err)
        res.send('Kitty udpated.')
    })
}


// DELETE
exports.kitty_delete = function (req, res) {
    Kitty.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err)
        res.send('Deleted successfully!')
    })
}
