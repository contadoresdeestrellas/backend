const express = require('express');
const router = express.Router();

const video_controller = require('../controllers/video.controller');

router.get('/',video_controller.random_video);

module.exports=router;
