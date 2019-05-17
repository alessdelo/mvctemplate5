module.exports.newData = "New Data"

module.exports.addJson =  page3: {
                              title: "pag3", 
                              content:'../contents/pag3.ejs',
                              descr: 'empty.....',
                              nav: nav,
                              header: header,
                              footer: footer,
                              params: []
                          }
                       

/*
module.exports = {
        newData = "New Data"
}
/*


/*
var data = JSON.parse(pageData);  //parse the JSON
data.pag3.push({        //add the employee
    title: "pag3", 
    content:'../contents/pag3.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: []
});

pageData = JSON.stringify(data);  //reserialize to JSON

*/
