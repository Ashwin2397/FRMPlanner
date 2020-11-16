var mongoose = require("mongoose"),
    express  = require("express"),
    cors     = require("cors"),
    app      = express();

// routes
var indexRoutes = require("./routes/index.js");

// Connect app to routes
app.use("/",indexRoutes);

// Listening on port 3000 
app.listen(3000,function(){
    console.log("[STARTING] Server is starting ... ");
    console.log("[LISTENING] Server has started ... ");
});