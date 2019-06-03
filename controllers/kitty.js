const Kitty = require('../models/kitty')


exports.kitty_create = function (req, res) {
/*

    let kitty = new Kitty(
        {
            name: req.body.name,
            age: req.body.age
            
        }
    )

    kitty.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Kitty Created successfully! Record: ' + req.body.name + ' - ' + req.body.age)
    })
*/

var item = {
           name: req.body.name,
            age: req.body.age
         }

         var data = new Kitty(item)
         data.save()
    



}


