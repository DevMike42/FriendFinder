// Get synced and working

var express = require("express");
var html = require("./routing/htmlRoutes");
var api = require("./routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

// Parse URL and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files location
app.use(express.static("app/public"));

// html routes
app.get("/survey", html.survey);
app.get("/repo", html.github);

// api routes
app.get("/friend", api.getFriends);
app.post("/friend", api.addFriend);

// default route
app.get("/*", html.home);




// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});