// TODO: Code logic for handling compatibility calculations

// Requiring the friends data file
var friendsData = require('../data/friends.js');

// Routes
function apiAllFriends(app) {

    // GET route for displaying all possible friends
    app.get('/api/friends', function(req, res) {
        
        // sends responst as JSON
        res.json(friendsData);
    });
};

function apiAddFriend(app) {

    // POST Rout for handling incoming survey results
    // as well as compatibility logic
    app.post('/api/friends', function(req, res) {

        // TODO: Add logic for incoming survey results

        // TODO: Add lofic for friend compatiblity
    });
};

// Exporting apiRoutes
modeule.exports = apiRoutes;