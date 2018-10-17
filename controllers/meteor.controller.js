const Meteor = require('../models/meteor.model');

exports.create = function(req,res){
  var meteor = new Meteor({
    origin:req.body.origin,
    end: req.body.end,
    video_id: req.body.video_id,
    width: req.body.width,
    color: req.body.color,
    user_id : req.body.user_id
  });

  meteor.save( function(err){
    if(err){
      return (err);
    }
    res.status(201);
    res.send('Meteor created successfully');
  });
};

exports.meteor_details=function(req,res){
    Meteor.findById(req.params.id, function(err,meteor){
        if(err) return err;
        res.send({id: meteor["_id"],
		  origin:meteor.origin,
		  end: meteor.end,
		  video_id: meteor.video_id,
		  width: meteor.width,
		  color: meteor.color,
		  user_id : meteor.user_id
		});
    });
};


exports.all_meteors = function(req,res){
    Meteor.find({},'_id', function(err,meteors){
        if(err)return err;
        res.send(meteors);
    });
};
