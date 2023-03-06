var mongoose = require('mongoose');
var { Schema } = mongoose;

var Schema = new Schema({
    amc:{
        required : true,
        type     : String
    },
    id:{
        type     : Number
    },
    // active:{
    //     type     : Boolean,
    //     default  : true
    // },
    
    
},{timestamps    : true,versionKey:false});

Schema.path('amc').validate(async (amc) => {
    const nameCount = await mongoose.models.user.countDocuments({amc})
    return !nameCount
},'Name already Exists');


var users = module.exports = mongoose.model('user',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}