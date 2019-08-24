// CREATES A RECORD (GET REQUEST)

var mainFolder = "../../";

const theModel = require(mainFolder + 'models/maps')
// const debugs = require(mainFolder + 'helpers/debugs.js')
// const randoms = require(mainFolder + 'helpers/randoms.js')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "Form 3 maps (Create via GET)"
var theUrl = "../contents/form3maps/create.ejs"
var theDescr = "empty....."

// -----------------------------------------

// change this!!!!!!
exports.createg = function (req, res) {

    let theSchema = new theModel(
        {
            "name": req.params.name,
            "description": req.params.description,	
	    "rate": req.params.rate,
	    "loc": {
  			"type" : "Point",
  			"coordinates" : [
					req.params.coordx,
					req.params.coordy
  					]
		   }
        })

    theSchema.save(function (err) {
        if (err) {
            return next(err)
        }
        
        var theParams = {
		    "name": req.params.name,
		    "description": req.params.description,	
		    "rate": req.params.rate,
		    "loc": {
				"type" : "Point",
				"coordinates" : [
						req.params.coordx,
						req.params.coordy
						]
			   }
                 };

        var text =  {
                 title: theTitle, 
                 content:theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }
        
        // debug
        res.send(text)
        // res.render(theIndex.index,text)
        
    }) // end save

} // end createg
