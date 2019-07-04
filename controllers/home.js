const Home = require('../models/home')
const debugs = require('../helpers/debugs.js')

exports.home = function (req, res) {
        res.render(index,pageData.home)
}
