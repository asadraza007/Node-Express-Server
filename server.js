var express = require('express');
var app = express();
var config = require('./config');
var bodyParser = require('body-parser');
var routes = require('./routes').routes;
app.use(express.static('publicData')); // serve public folder
app.use(bodyParser.urlencoded({ extended: false }));

const webServer = config[process.env.NODE_ENV];
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })


routes(app);

var server = app.listen(webServer.serverPort, webServer.serverUrl, () => {
    console.log(`Server running at http://${webServer.serverUrl}:${webServer.serverPort}/`);
});

// var server = app.listen(1122, '', function () {
//     var host = server.address().address
//     var port = server.address().port
    
//     console.log("Example app listening at http://%s:%s", host, port) 
// })

