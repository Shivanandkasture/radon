const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const publisherSchema = new mongoose.Schema({

    publisherName : String,

    headQuarter : String

} ,{timestamps : true});

module.exports = mongoose.model("PublisherData", publisherSchema);