exports.ajaxPostResp = function (req, res) {
  
    console.log('Post a Customer: ' + JSON.stringify(req.body));

    res.send(req.body);
     
} // end ajaxPosResp
