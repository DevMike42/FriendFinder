// COMPLETED

var path = require('path');

module.exports = function(app) {

    // Get request
    app.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname + '/..public/survey.html'));
    });

    // If a matching route is not found, default to home html
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/..public/home.html'));
    });
}