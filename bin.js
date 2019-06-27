  _------------------------------------------
  
  Kitty.
        find({"name" : /.*a.*/i} ).
        limit(5).
        exec(function (err, result) {
              if (err) return next(err)
              res.send( debugs.textFromObject(result) )
           })
           
  _------------------------------------------
