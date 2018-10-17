const express = require('express');
const router = express.Router();

const meteor_controller = require('../controllers/meteor.controller');

router.post('/',meteor_controller.create);
router.get('/',meteor_controller.all_meteors);
router.get('/:id',meteor_controller.meteor_details);
module.exports = router;
