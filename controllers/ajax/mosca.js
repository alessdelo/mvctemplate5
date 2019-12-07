
// mosca MQTT broker

var broker = new mosca.Server(settings)


        /*
       broker.on('ready', () => {
           console.log('broker is ready!')
           res.send('broker is ready!')
           // res.render(theIndex.index,text)
        }) 
        */


exports.mosca = function (req, res) {
            
       // res.send("hello mosca!");
       broker.on('ready', () => {
           console.log('broker is ready!')
           res.send('broker is ready!')
           // res.render(theIndex.index,text)
        })             
            
        
} // end export.
