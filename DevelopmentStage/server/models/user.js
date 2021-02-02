var mongoose = require("mongoose");


var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    readingStates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ReadingState"
        }
    ]
    
    
    
});


module.exports = mongoose.model("User",userSchema);