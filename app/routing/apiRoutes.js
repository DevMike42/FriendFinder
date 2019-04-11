

// Requiring the friends data file
var friendsList = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: Infinity
        };

        console.log(req.body);
        userData = req.body;
        userScores = userData.scores;

        var totalDiff;

        for (var i = 0; i < friendsList.length; i++) {

            var currentFriend = friendsList[i];

            totalDiff = 0;

            console.log(currentFriend.name);
            
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                
                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                
                console.log("Name: " + currentFriend.name + " TotalDiff: " + totalDiff);
            }

            if (totalDiff <= bestMatch.scoreDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.scoreDifference = currentFriend.scoreDifference;
            }
        }

        friendsList.push(userData);

        res.json(bestMatch);

    });
}