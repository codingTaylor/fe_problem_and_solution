/**
 * Created by taylor on 16-6-20.
 */
var express = require('express');
var router = require('./router');
var app = express();

//mount router

app.use('/', router);

app.use(express.static('public'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server start at http://%s:%s', host, port);
});

