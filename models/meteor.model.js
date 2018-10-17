const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Meteor model
var MeteorSchema = new Schema({
  origin:{
    x:{type:Number,required:true},
    y:{type:Number,required:true},
    time:{type:Number,required:true}
  },
  end:{
    x:{type:Number,required:true},
    y:{type:Number,required:true},
    time:{type:Number,required:true}
  },
  video_id:{type:String,required:true},
  width:{type:Number,required:true},
  color:{type:String,required:true},
  user_id:{type:String,required:true},
  id:{type:String,required:true}
});

// Export the model
module.exports = mongoose.model('Meteor',MeteorSchema);








