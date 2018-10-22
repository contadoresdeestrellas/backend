const express = require('express');
const router = express.Router();

// require controllers

const video_controller = require('../controllers/video.controller');

router.get('/test',video_controller.test);
router.get('/',video_controller.all_videos);
router.get('/:id',video_controller.video_details);

router.post('/', video_controller.create_video);
module.exports = router;
