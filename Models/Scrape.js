var mongoose = require("mongoose");

var Schema = mongoose.Schema;

let ScrapeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link:{
        type: String,
        required:true
    },
    
});

var Scrape = mongoose.model("Scrape", ScrapeSchema);
// Export the Article model
module.exports = Scrape;