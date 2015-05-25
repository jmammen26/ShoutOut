var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var caveSchema=mongoose.Schema({
    caveId:String,
    userList:[String],
    isPrivate:Boolean,
    ofObjectId: [Schema.Types.ObjectId]

});

module.exports = mongoose.model('cave', caveSchema);