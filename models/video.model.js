const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Video model
var VideoSchema = new Schema({
  MALE: {type: String, required:true},
  url: {type:String, required:true},
  latitude:{type:Number,required:true},
  longitude:{type:Number,required:true},
  date:{type:Date,default:Date.now  },
  name:{type:String,required:true},
  duration:{type:Number,required:true},
  camera_type:{type:String,required:true}
});


// Export the model
module.exports = mongoose.model('Video',VideoSchema);


