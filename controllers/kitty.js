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
    Kitty.findById(req.params.id, function (err, result) {
        if (err) return next(err)
        res.send(result)
    })
}


// UPDATE
exports.kitty_update = function (req, res) {
    Kitty.findByIdAndUpdate(req.params.id, {$set: { name: req.params.name, age: req.params.age}}, function (err, product) {
        if (err) return next(err)
        res.send('Kitty udpated.')
    })
}

/*
Place.findById(req.params.id, function(err, p) {
  if (!p)
    return next(new Error('Could not load Document'));
  else {
    // do your updates here
    p.modified = new Date();

    p.save(function(err) {
      if (err)
        console.log('error')
      else
        console.log('success')
    });
  }
});
*/

// DELETE
exports.kitty_delete = function (req, res) {
    Kitty.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) return next(err)
        res.send('item id: ' + req.params.id + ' Deleted successfully!')
    })
}
