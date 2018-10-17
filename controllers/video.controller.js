const Video = require('../models/video.model');

exports.test = function (req,res){
  res.send('OK');
};

exports.video_details=function(req,res){
    Video.findById(req.params.id, function(err,video){
        if(err) return err;
        res.send({id: video["_id"],
		  MALE : video.male,
                  url: video.url,
                  latitude: video.latitude,
                  longitude: video.longitude,
                  date: video.date,
                  name: video.name,
                  duration: video.duration,
                  camera_type: video.camera_type
		});
    });
};
exports.all_videos = function(req,res){
    Video.find({},'_id', function(err,video){
        if(err)return err;
	console.log(video);
        res.send(video);
    });
};

exports.random_video = function(req,res){
    Video.find({},'_id duration',function(err,videos){
        if(err) {
            console.log("Error en video random");
            return err;
        }
        var choice = Math.floor((Math.random()*videos.length));
        console.log("Elegido video #" + choice);
        var myId = videos[choice]._id;
        var mySecond = Math.floor((Math.random()*videos[choice].duration));
        res.send({id:myId,second:mySecond});
    });
};
exports.create_video = function(req,res){
    var video  = new Video({
        MALE:req.body.MALE,
        url:req.body.url,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        date:req.body.date,
        name:req.body.name,
        duration:req.body.duration,
        camera_type:req.body.camera_type
    });
    video.save(function(err){
        if(err) return err;
        res.status(201);
        res.send('Video created successfully');
    });
};
