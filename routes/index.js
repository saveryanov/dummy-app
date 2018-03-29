var router = require('express').Router();

/*
 * Routes func
 */
module.exports = function () {

    // main page
    router.get('/', function (req, res) {
        console.log("Called method: /.");
        res.send('Dummy API App');
    });
    
    // ping
    router.get('/ping', function(req, res) {
        console.log("Called method: ping.");
        res.setHeader('Content-type', 'text/plain');
        res.charset = 'UTF-8';
        res.write("pong");
        res.end();
    });
    
    // version control
    router.get('/v', function(req, res) {
        var packageInfo = require('../package.json');
        console.log("Called method: version check.");
        res.jsonp({
            name: packageInfo.name,
            version: packageInfo.version,
            description: packageInfo.description,
            author: packageInfo.author,
            license: packageInfo.license,
        });
        res.end();
    });


    return router;
};
