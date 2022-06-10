const publisherModels = require("../models/newPublisherModel");

const creatPublishers = async function(req,res){

    let publisher = req.body;
    let createPublisher = await publisherModels.create(publisher);
    res.send({data : createPublisher});
}

module.exports.creatPublishers = creatPublishers;