'use strict';

var userAgent = require("user-agent");

module.exports = function(app){
    app.route('/')
        .get(function(req,res){
            var agent = userAgent.parse(req.headers['user-agent']);
            var result ={};
            result.ipaddress = req.headers['x-forwarded-for'];
            result.language = req.language;
            result.software = agent.os;
            
            res.end(JSON.stringify(result));
        });
};