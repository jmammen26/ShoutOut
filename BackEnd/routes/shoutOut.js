var mongoose = require('mongoose');
var request = require('request');
var user = require('Schemas/userSchema.js');
var shoutOut= require('Schemas/shoutOutSchema.js');
var cave = require('Schema/caveSchema.js');
//redefine when we get actual db instance somewhere
mongoose.connect('mongodb://localhost:8080/shoutOutDB');

exports.postShoutOut = function(id,from,to,text){


}
function storeShoutout(id,from,to,text){ var newShoutOut= new shoutOut({
                                                        shoutOutId:id,
                                                        shoutOut:text,
                                                        recieverUserId:from,
                                                        senderUserId:to

                                            })

                                            shoutOut.find({shoutOutId:id},function(err,shoutOuts){
                                            var len= shoutOuts.length;
                                            if(len == 0){
                                                newShoutOut.save(function (err){
                                                callback({'response':"Success"});
                                                });

                                            }else{
                                                    callback({'response':"User already exists"});
                                            }

                                            });}
function storeRecievingUserShoutOut(from,id){
    user.find({username:from},function(err,user){
        var len = user.length;
        //no user with that ID is found
        if(len == 0){
            callback({'response',"No recieving user found "});
        }elseif(len == 1){
            user.recievedShoutOutIds.push(id);
            callback({'response'})

        }
        }
}
function storeOutgoingUserShoutOut(to,id){}
function storeShoutOutToCave(caveId,shoutOutID)
exports.getAllShoutOuts = function(username,nameOfBusiness){}