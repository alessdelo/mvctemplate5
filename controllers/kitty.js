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

exports.kitty_update = function (req, res) {
    Kitty.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err)
        res.send('Kitty udpated.')
    })
}
