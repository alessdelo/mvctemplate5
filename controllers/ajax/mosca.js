
// mosca MQTT broker




        /*
       broker.on('ready', () => {
           console.log('broker is ready!')
           res.send('broker is ready!')
           // res.render(theIndex.index,text)
        }) 
        */


exports.mosca = function (req, res) {
       var broker = new mosca.Server(moscaSsettings) 
       // res.send("hello mosca!");
       broker.on('ready', () => {
           console.log('broker is ready!')
           res.send('broker is ready!')
           // res.render(theIndex.index,text)
        })             
            
        
} // end export.
