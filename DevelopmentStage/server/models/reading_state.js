var mongoose = require("mongoose");


var readingStateSchema = new mongoose.Schema({
    read: Boolean,
    reviewed: Boolean,
    masteryLevel: String,
    reading: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reading"
    },
    assignedDate: Date
    
});


module.exports = mongoose.model("ReadingState",readingStateSchema);