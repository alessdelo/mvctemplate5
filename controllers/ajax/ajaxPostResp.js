exports.ajaxPostResp = function (req, res) {
  
    res.send("this is a post response!");   
    // res.send("the request is: " + JSON.stringify(req.body));
  
    console.log('Post a Customer: ' + JSON.stringify(req.body));
    var customer = {};
    customer.firstname = req.body.firstname;
    customer.lastname = req.body.lastname;
  
    customers.push(customer);
  
    return res.send(customer);
      
} // end ajaxPosResp
