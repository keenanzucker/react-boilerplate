'use strict';

var mongoose = require('mongoose');

// TODO Set these environment variables
var uname = process.env.MONGO_UNAME;
var password = process.env.MONGO_PWD;
var env = process.env.NODE_ENV;
var options = {
    autoReconnect: true,
    reconnectTries: 100,
    reconnectInterval: 2000
};

var auth;
var db;

db = mongoose.connect('mongodb://localhost/'); // TODO Add localhost database name here
console.log('Connected to local database');

mongoose.connection.on('error', function(e) {
    console.log('Could not connect to mongoose', e);
});

mongoose.connection.once('open', function(){
    console.log('Mongodb Connection Successful');
});

module.exports = db;
