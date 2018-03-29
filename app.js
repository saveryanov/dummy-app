const express = require('express');
var config = require('./config');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


// create express app
var app = express();

app.disable('x-powered-by');
app.enable("jsonp callback");   // for .json response format
app.use(cookieParser());

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb', parameterLimit: 5000 }));

// Create logger
app.use(logger('[:date[clf]] :req[x-forwarded-for] :method :status :response-time ms :url remoteaddr: [:remote-addr]; user: [:remote-user]'));


// error handler
app.use(function (err, req, res, next) {
    console.error('Error: ');
    console.error(err.stack);

    //Неизвестная ошибка
    res.status(500).jsonp({
        errors: '500',
        data: {}
    });
});


// Add routes
app.use('/', require('./routes/index')());

// set listening port
app.set('port', process.env.PORT || config.appPort);

// server start
var server = app.listen(app.get('port'), function () {
    console.log('Dummy App listening on port ' + server.address().port);
});
