var importVars = require('./routes/vars.js')
var theIndex = importVars.index

var text =  {
           title: "home", 
           content:"../contents/home.ejs",
           descr: "empty.....",
           nav: "",
           header: "",
           footer: "",
           params: []
          }
 
app.get('/', (req, res) => res.render(theIndex,text))
