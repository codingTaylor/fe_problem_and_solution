/**
 * Created by taylor on 16-6-20.
 */
var express = require('express');
var router = express.Router();

var options = {
    root: __dirname + '/html/',
    dotfiles: 'deny',
};

router.get('/', function (req, res) {
    res.sendFile('home.html', options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('home page send success');
        }
    })
});

module.exports = router;