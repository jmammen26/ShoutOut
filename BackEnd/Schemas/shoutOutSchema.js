
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shoutOutSchema=mongoose.Schema({
    shoutOutId:String,
    shoutOut:String,
    recieverUserId:String,
    senderUserId:String,
    ofObjectId: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('shoutOut', shoutOutSchema);