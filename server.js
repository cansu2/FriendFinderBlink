var express = require ('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);


app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000,function(){
    console.log("we have started our server on port 3000")
})
