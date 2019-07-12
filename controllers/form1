const Kitty = require('../models/kitty')
const debugs = require('../helpers/debugs.js')


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
    Kitty.findById(req.params.id, function (err, result) {
        if (err) return next(err)
        res.send(result)
    })
}


// UPDATE
exports.kitty_update = function (req, res) {
    Kitty.findByIdAndUpdate(
                            {
                                "_id": req.params.id
                             },
        
                            {
                                $set: { "name": req.params.name, "age": req.params.age}}, function (err, product) {
                                            if (err) return next(err)
                                                    res.send('Kitty udpated.' + ' _id: ' + req.params.id + 
                                                                                ' name: ' + req.params.name + 
                                                                                ' age: ' + req.params.age
                                                                                )
                            }
                           )
} // end kitty_update


// DELETE
exports.kitty_delete = function (req, res) {
    Kitty.findByIdAndRemove(req.params.id, { useFindAndModify: false }, function (err, result) {
        if (err) return next(err)
        // res.send('item id: ' + req.params.id + ' Deleted successfully!')
        res.send( debugs.textFromObject(result) )
    })
}


// Extract last n.
exports.kitty_lastitems = function (req, res) {


   //   res.send("num: " + req.params.num)


    
    Kitty.find({}, { useFindAndModify: false }, function (err, result) {
 if (err) res.send(debugs.textFromObject(err)) // return next(err)
// or if no items are found maybe
// if (0 === result.length) return next(new NotFoundError))
   
        // res.send(req.params.num + 'items found - ' + debugs.textFromObject(result))   
        res.send("the num: " + req.params.num +
                  "<br> result: " + debugs.textFromObject(result))
    
    } ).sort({$natural:1}).limit(parseInt(req.params.num))
    

    /*
    Kitty.find({ useFindAndModify: false }).sort({$natural:1}).limit(parseInt(req.params.num),function (err, result) {
        if (err) return next(err)
        res.send( "the num: " + req.params.num +
                  "<br> result: " + debugs.textFromObject(result) )
             ) // end limit
    */
 }
