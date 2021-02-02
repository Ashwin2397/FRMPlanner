var mongoose = require("mongoose");


var readingSchema = new mongoose.Schema({
    title: String,
    readingNumber: String,
    lo: [String],
    intensity: String,
    tags:[String],
    thread: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread"
    }
    
});


module.exports = mongoose.model("Reading",readingSchema);