var mainFolder = "../../";

// const theModel = require(mainFolder + 'models/maps')

var importVars = require(mainFolder + 'vars.js')
var theIndex = importVars.index

var theTitle = "MQTT test n.1"
var theUrl = "../contents/mqtt/sendmqtt.ejs"
var theDescr = "empty....."

// -----------------------------------------

var mqttHandler = require(mainFolder + 'helpers/mqtt/mqttHandler.js');

var mqttClient = new mqttHandler();

mqttClient.connect();

// -----------------------------------------


exports.sendmqtt = function (req, res) {
  
  
    mqttClient.sendMessage(req.body.username);
    res.status(200).send("message sent to MQTT");
  
    /*
       
       var theParams = {
                 
                 }
           
        var text =  {
                 title: theTitle, 
                 content: theUrl,
                 descr: theDescr,
                 nav: theIndex.nav,
                 header: theIndex.header,
                 footer: theIndex.footer,
                 params: [theParams]
                }
        
        // debug
        // res.send(text)
        
       res.render(theIndex.index,text)
       
       */

} // end export.
