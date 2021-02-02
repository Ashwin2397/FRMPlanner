var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    title: String,
    reading: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reading"
    }
    
});


module.exports = mongoose.model("Book",bookSchema);