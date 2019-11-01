/* ITMSERVER

  This works now, basic
  Get / Put / Delete ITMObject by id
  (GET)http://localhost:3000/itmobjects/5dacbe72243b411068a4a8fa
  (PUT))http://localhost:3000/itmobjects/5dacbe72243b411068a4a8fa
  (DELETE))http://localhost:3000/itmobjects/5dacbe72243b411068a4a8fa

  Get all ITMObjects
  (GET)http://localhost:3000/itmobjects
  
  Add ITMObject
  (POST)http://localhost:3000/itmobjects
*/

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/itmObjectModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/itmmanager', { useNewUrlParser: true, useUnifiedTopology: true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/itmObjectRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
