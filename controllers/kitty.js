// const Kitty = require('../models/kitty')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!')
}




/*
exports.kitty_create = function (req, res) {
    let kitty = new Kitty(
        {
            name: req.body.name
        }
    );

    kitty.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Kitty Created successfully')
    })
};
*/

