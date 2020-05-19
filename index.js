var express = require('express');
var port = 5000 || process.env.PORT;

var app = express();


//app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "digitclassifier.html" );
})

var server = app.listen(port, function () {
   var host = server.address().address
   

   console.log("Example app listening at http://%s:%s", host, port)
})