var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var userSchema=mongoose.Schema({
    username:String,
    momentum:Number,
    registrationId:String,
    caves:[String],
    recievedShoutOutIds:[String],
    sendShoutOutIds:[String],
    ofObjectId: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('user', userSchema);