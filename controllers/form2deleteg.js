// DELETES A RECORD (GET REQUEST)

const theModel = require('../models/kitty')
const debugs = require('../helpers/debugs.js')
const randoms = require('../helpers/randoms.js')

var importVars = require('../vars.js')
var theIndex = importVars.index

// -----------------------------------------

exports.delete = function (req, res) {
    theModel.findByIdAndRemove(req.params.id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
        // res.send('item id: ' + req.params.id + ' Deleted successfully!')
        res.send( debugs.textFromObject(result) )
    })
}
