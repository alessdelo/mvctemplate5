const Home = require('../models/home')
const debugs = require('../helpers/debugs.js')

var home: {	 
    title:'Three.js hello world',
    content:'../contents/threehello.ejs',
    nav: nav,
    header: header,
    footer: footer,
    params: []
  }

exports.home = function (req, res) {
        res.render(index,home)
}
