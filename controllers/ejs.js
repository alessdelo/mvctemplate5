var importVars = require('../vars.js')
var theIndex = importVars.index

exports.toDo = function (req, res) {

        var theParams = {
                 "name": req.params.name,
                 "age": req.params.age
                 }
    
        var text =  {
                 title: "ejs", 
                 content:"../contents/ejs.ejs",
                 descr: "empty.....",
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }
        
        res.render(theIndex.index,text)
      
}  end toDo
