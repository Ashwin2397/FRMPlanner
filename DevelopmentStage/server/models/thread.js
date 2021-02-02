var mongoose = require("mongoose");


var threadSchema = new mongoose.Schema({
    readingTitle: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});


module.exports = mongoose.model("Thread",threadSchema);