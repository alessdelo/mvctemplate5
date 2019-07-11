# mvctemplate
1) Sets base modules imported from /routes folder
2) Retrieves Heroku variables into imported files

# mvctemplate2
Very basic test of modules importing from controller to route to app.
- app.js imports a custom module from /routes/test.js
- in turn /routes/test imports another module from /controllers/test.js that contains the functions "test0" and "test1"
- /routes/test.js defines a "sub-route" for every function defined into the controller /test0 and /test1
- in app.js is created a "main-route" /test (derived from routes/test.js), that defines the final route for every function in the controller:  /test/test0 and test/test1

in conclusion:
1) controller functions are nested into route
2) route is nested into app

# mvctemplate3
1) retrieved Config Vars from Heroku (in particular MONGODB_URI for connection with MLab database)
2) sets a mongoose connection
3) requires external functions from helpers folder
4) creates authomatic random data for the DB
5) retrieves variables via url using bodyParser and req.params.
6) creates into models folder a mongoose Schema and sets data and the destination Mongoose Collection
7) saves data into the mongoose DB end gives a response about it

in conclusion:
1) mongoose Schemas are contained into models folder and manage the data
2) controller functions imports Schemas, from models folder, create an instance of the Schema and defines the functions for it
1) routs import the controller functions and define a rout for every different function of the controller 
2) app import routes and defines the general routes

# mvctemplate4
1)implements CRUD (Create, Read, Update, Delete) operations in mongoose Schemas
into controllers files
2) basic settings of ejs views

in conclusion:


